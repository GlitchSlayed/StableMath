import { describe, expect, it } from 'vitest'
import { generateQuestion } from '@/lib/question-engine/generator'
import { templateRegistry } from '@/lib/question-engine/templates'

describe('question engine', () => {
  it('generates deterministic power-rule questions', () => {
    const template = templateRegistry['calc-power-rule-1']
    const a = generateQuestion(template, ['demo', '2026-03-18'])
    const b = generateQuestion(template, ['demo', '2026-03-18'])
    expect(a).toEqual(b)
  })

  it('classifies missing chain rule factor', () => {
    const template = templateRegistry['calc-chain-rule-2']
    const question = generateQuestion(template, ['demo', '2026-03-18'])
    const result = template.validate(String(question.metadata?.outerOnlyAnswer), question)
    expect(result.errorType).toBe('chain-rule')
  })
})
