'use client'

import { useMemo, useState } from 'react'
import { AnswerInput } from '@/components/quiz/AnswerInput'
import { FeedbackPanel } from '@/components/quiz/FeedbackPanel'
import { HintPanel } from '@/components/quiz/HintPanel'
import { QuestionCard } from '@/components/quiz/QuestionCard'
import { SessionProgress } from '@/components/quiz/SessionProgress'
import { Button } from '@/components/ui'
import { generateQuestion } from '@/lib/question-engine/generator'
import { templateRegistry } from '@/lib/question-engine/templates'
import type { ValidationResult } from '@/lib/question-engine/types'

const template = templateRegistry['calc-power-rule-1']

export default function PracticePage() {
  const question = useMemo(() => generateQuestion(template, ['practice', '2026-03-18']), [])
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState<ValidationResult | null>(null)
  const [hintsUsed, setHintsUsed] = useState(0)

  return (
    <div className='space-y-6'>
      <SessionProgress current={1} total={10} difficulty={template.difficulty} elapsed={0} />
      <QuestionCard prompt={question.prompt} topic={template.topicId} />
      <AnswerInput value={answer} onChange={setAnswer} />
      <div className='flex gap-3'>
        <Button onClick={() => setResult(template.validate(answer, question))}>Check answer</Button>
        <Button variant='secondary' onClick={() => setHintsUsed((value) => Math.min(3, value + 1))}>Use hint</Button>
      </div>
      <HintPanel hints={template.hints} used={hintsUsed} />
      <FeedbackPanel result={result} />
    </div>
  )
}

export function generateStaticParams() {
  return Object.entries({ engineering: ['unit1-calc1'], 'cs-ml-ai': ['unit2-probability', 'unit3-optimization'] }).flatMap(([track, units]) => units.map((unit) => ({ track, unit })))
}
