import type { Track } from '@/content/schema'

export const engineeringTrack: Track = {
  id: 'engineering',
  slug: 'engineering',
  title: 'Engineering',
  audience: 'Students building mathematical fluency for engineering systems.',
  description: 'Calculus, linear algebra, ODEs, and numerical methods with engineering framing.',
  sharedTopicIds: ['linear-algebra-core'],
  units: [
    {
      id: 'eng-calc-1',
      slug: 'unit1-calc1',
      title: 'Unit 1 — Calculus I',
      summary: 'Limits, derivatives, and integrals for first-year engineering study.',
      order: 1,
      estimatedMinutes: 180,
      topics: [
        { id: 'limits', title: 'Limits', summary: 'Definition, one-sided limits, continuity, and L’Hôpital.', lessonPath: 'limits.mdx', practiceTemplateIds: ['calc-power-rule-1'] },
        { id: 'derivatives', title: 'Derivatives', summary: 'Power, product, quotient, and chain rules.', lessonPath: 'derivatives.mdx', practiceTemplateIds: ['calc-power-rule-1', 'calc-chain-rule-2'] },
        { id: 'integrals', title: 'Integrals', summary: 'Antiderivatives, FTC, and substitution.', lessonPath: 'integrals.mdx', practiceTemplateIds: ['calc-chain-rule-3'] }
      ]
    },
    { id: 'eng-multivar', slug: 'unit2-multivariable', title: 'Unit 2 — Multivariable Calculus', summary: 'Partials, gradients, directional derivatives, and double integrals.', order: 2, estimatedMinutes: 150, topics: [] },
    { id: 'eng-odes', slug: 'unit3-odes', title: 'Unit 3 — ODEs', summary: 'Separable equations, first-order linear ODEs, and characteristic equations.', order: 3, estimatedMinutes: 150, topics: [] },
    { id: 'eng-linear-algebra', slug: 'unit4-linear-algebra', title: 'Unit 4 — Linear Algebra', summary: 'Elimination, determinants, inverses, and eigenvalues.', order: 4, estimatedMinutes: 150, topics: [] },
    { id: 'eng-vector-calc', slug: 'unit5-vector-calc', title: 'Unit 5 — Vector Calculus', summary: 'Divergence, curl, and integral theorems.', order: 5, estimatedMinutes: 120, topics: [] },
    { id: 'eng-fourier', slug: 'unit6-fourier', title: 'Unit 6 — Fourier Methods', summary: 'Series, transforms, and engineering signals.', order: 6, estimatedMinutes: 120, topics: [] },
    { id: 'eng-numerical', slug: 'unit7-numerical', title: 'Unit 7 — Numerical Methods', summary: 'Root-finding, interpolation, and approximation.', order: 7, estimatedMinutes: 120, topics: [] }
  ]
}
