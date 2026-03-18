'use client'

import { useMemo, useState } from 'react'
import { Badge, Button, Card, ProgressBar } from '@/components/ui'
import { AnswerInput } from '@/components/quiz/AnswerInput'
import { FeedbackPanel } from '@/components/quiz/FeedbackPanel'
import { HintPanel } from '@/components/quiz/HintPanel'
import { QuestionCard } from '@/components/quiz/QuestionCard'
import { templateRegistry } from '@/lib/question-engine/templates'
import { generateQuestion } from '@/lib/question-engine/generator'
import type { PracticeSkill } from '@/content/schema'
import type { QuestionTemplate, ValidationResult } from '@/lib/question-engine/types'

const difficultyLabel = (accuracy: number) => accuracy >= 90 ? 'Ready to move on' : accuracy >= 75 ? 'Stretching' : 'Building'

export function AdaptivePractice({ title, skills, moveOnThreshold }: { title: string; skills: PracticeSkill[]; moveOnThreshold: number }) {
  const templates = useMemo(
    () => skills.flatMap((skill) => skill.templateIds.map((id) => templateRegistry[id]).filter(Boolean) as QuestionTemplate[]),
    [skills]
  )

  const [questionIndex, setQuestionIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [hintsUsed, setHintsUsed] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [lastResult, setLastResult] = useState<ValidationResult | null>(null)

  const activeTemplate = templates[questionIndex % Math.max(templates.length, 1)]
  const activeQuestion = useMemo(() => {
    if (!activeTemplate) return null
    return generateQuestion(activeTemplate, [title, String(questionIndex)])
  }, [activeTemplate, questionIndex, title])

  const accuracy = attempts === 0 ? 0 : Math.round((correctCount / attempts) * 100)

  if (!activeTemplate || !activeQuestion) {
    return <Card><p className='text-sm text-[var(--text-secondary)]'>Practice content is still being authored for this section.</p></Card>
  }

  const onCheck = () => {
    const result = activeTemplate.validate(answer, activeQuestion)
    setAttempts((value) => value + 1)
    if (result.correct) setCorrectCount((value) => value + 1)
    setLastResult(result)
  }

  const nextQuestion = () => {
    setQuestionIndex((value) => value + 1)
    setAnswer('')
    setHintsUsed(0)
    setLastResult(null)
  }

  return (
    <div className='space-y-6'>
      <Card className='space-y-4'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div>
            <div className='text-sm text-[var(--text-secondary)]'>Unlimited practice</div>
            <h2 className='text-2xl'>{title}</h2>
          </div>
          <Badge>{difficultyLabel(accuracy)}</Badge>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          <div><div className='text-sm text-[var(--text-secondary)]'>Attempts</div><div className='mt-1 text-2xl font-semibold'>{attempts}</div></div>
          <div><div className='text-sm text-[var(--text-secondary)]'>Accuracy</div><div className='mt-1 text-2xl font-semibold'>{accuracy}%</div></div>
          <div><div className='text-sm text-[var(--text-secondary)]'>Recommendation</div><div className='mt-1 text-sm'> {accuracy >= moveOnThreshold ? `You are above ${moveOnThreshold}% — move to the next section when ready.` : `Stay here until you sustain ${moveOnThreshold}% accuracy.`}</div></div>
        </div>
        <ProgressBar value={accuracy} />
      </Card>

      <Card className='space-y-3'>
        <div className='text-sm text-[var(--text-secondary)]'>Skill rotation</div>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill) => <Badge key={skill.label}>{skill.label}</Badge>)}
        </div>
      </Card>

      <QuestionCard prompt={activeQuestion.prompt} topic={activeTemplate.topicId} />
      <AnswerInput value={answer} onChange={setAnswer} />
      <div className='flex flex-wrap gap-3'>
        <Button onClick={onCheck}>Check answer</Button>
        <Button variant='secondary' onClick={() => setHintsUsed((value) => Math.min(activeTemplate.hints.length, value + 1))}>Use hint</Button>
        <Button variant='ghost' onClick={nextQuestion}>Next question</Button>
      </div>
      <HintPanel hints={activeTemplate.hints} used={hintsUsed} />
      <FeedbackPanel result={lastResult} />
    </div>
  )
}
