import type { Track, Unit } from '@/content/schema'

const sharedFoundationsUnit: Unit = {
  id: 'shared-foundations',
  slug: 'shared-foundations',
  title: 'Shared Unit — Mathematical Foundations',
  summary: 'A shared bridge unit for functions, linear algebra language, and optimization intuition used across engineering and ML.',
  order: 0,
  estimatedMinutes: 160,
  shared: true,
  sections: [
    {
      id: 'functions-modeling',
      slug: 'functions-modeling',
      title: 'Functions as models',
      summary: 'How formulas map inputs to outputs and why that framing drives both mechanics and machine learning.',
      conceptualContentPath: 'content/section-pages/shared/shared-foundations/functions-modeling/conceptual.md',
      mathContentPath: 'content/section-pages/shared/shared-foundations/functions-modeling/math.md',
      sources: [
        { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Function language, multiple representations, and algebra review.' },
        { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Precalculus framing for functions, inverses, and transformations.' },
        { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Modeling mindset and variable interpretation.' }
      ],
      practiceSkills: [
        { label: 'Differentiate simple monomials', templateIds: ['calc-power-rule-1', 'calc-power-rule-2'] },
        { label: 'Interpret composite transformations', templateIds: ['calc-chain-rule-1'] }
      ],
      moveOnThreshold: 90
    },
    {
      id: 'vectors-matrices',
      slug: 'vectors-matrices',
      title: 'Vectors and matrices',
      summary: 'Shared linear algebra language for forces, data tables, and parameter spaces.',
      conceptualContentPath: 'content/section-pages/shared/shared-foundations/vectors-matrices/conceptual.md',
      mathContentPath: 'content/section-pages/shared/shared-foundations/vectors-matrices/math.md',
      sources: [
        { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Linear algebra fundamentals.' },
        { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Geometric interpretation of linear transformations.' },
        { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Vectorized computation and matrix notation in ML.' }
      ],
      practiceSkills: [
        { label: 'Reason about eigendirections', templateIds: ['lin-eigen-1', 'lin-eigen-2'] }
      ],
      moveOnThreshold: 90
    }
  ]
}

export const engineeringTrack: Track = {
  id: 'engineering',
  slug: 'engineering',
  title: 'Engineering',
  audience: 'Students building mathematical fluency for engineering systems.',
  description: 'Calculus, differential equations, and modeling with explicit conceptual pages, math pages, and adaptive practice.',
  units: [
    sharedFoundationsUnit,
    {
      id: 'eng-calc-1',
      slug: 'unit1-calc1',
      title: 'Unit 1 — Calculus I',
      summary: 'Limits, derivatives, and integrals anchored in rates of change and accumulation.',
      order: 1,
      estimatedMinutes: 220,
      shared: false,
      sections: [
        {
          id: 'limits-continuity',
      slug: 'limits-continuity',
      title: 'Limits and continuity',
      summary: 'Approaching a value, understanding local behavior, and distinguishing existence from substitution.',
      conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/limits-continuity/conceptual.md',
      mathContentPath: 'content/section-pages/engineering/unit1-calc1/limits-continuity/math.md',
      sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Limit laws and continuity examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Calculus volume treatment of limits.' }
          ],
          practiceSkills: [
            { label: 'Differentiate nearby algebraic forms', templateIds: ['calc-power-rule-1'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'derivative-rules',
      slug: 'derivative-rules',
      title: 'Derivative rules',
      summary: 'Power, product, quotient, and chain rule fluency for engineering rate-of-change questions.',
      conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/derivative-rules/conceptual.md',
      mathContentPath: 'content/section-pages/engineering/unit1-calc1/derivative-rules/math.md',
      sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Core derivative rule worked examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Rule-based differentiation and interpretation.' },
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Conceptual framing for rates and local linearity.' }
          ],
          practiceSkills: [
            { label: 'Power rule fluency', templateIds: ['calc-power-rule-1', 'calc-power-rule-2', 'calc-power-rule-3'] },
            { label: 'Chain rule fluency', templateIds: ['calc-chain-rule-1', 'calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'integral-accumulation',
      slug: 'integral-accumulation',
      title: 'Integrals and accumulation',
      summary: 'Net area, antiderivatives, and accumulation functions that reverse differentiation.',
      conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/integral-accumulation/conceptual.md',
      mathContentPath: 'content/section-pages/engineering/unit1-calc1/integral-accumulation/math.md',
      sources: [
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'FTC and substitution examples.' },
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Accumulation function interpretations.' }
          ],
          practiceSkills: [
            { label: 'Chain-rule structure recognition', templateIds: ['calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        }
      ]
    }
  ]
}

export const csmlTrack: Track = {
  id: 'cs-ml-ai',
  slug: 'cs-ml-ai',
  title: 'CS & ML',
  audience: 'Learners connecting mathematical ideas to machine learning systems.',
  description: 'Linear algebra, probability, optimization, and calculus with expansive conceptual notes and adaptive practice.',
  units: [
    sharedFoundationsUnit,
    {
      id: 'cs-probability',
      slug: 'unit2-probability',
      title: 'Unit 2 — Probability & Statistics',
      summary: 'Conditional reasoning, Bayes, expectation, and uncertainty for model-based decisions.',
      order: 2,
      estimatedMinutes: 210,
      shared: false,
      sections: [
        {
          id: 'bayesian-reasoning',
      slug: 'bayesian-reasoning',
      title: 'Bayesian reasoning',
      summary: 'How priors and evidence combine into posterior beliefs.',
      conceptualContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/bayesian-reasoning/conceptual.md',
      mathContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/bayesian-reasoning/math.md',
      sources: [
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Conditional probability and Bayes basics.' },
            { label: 'LibreTexts', href: 'https://math.libretexts.org', note: 'Worked Bayes examples and probability trees.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Probabilistic modeling mindset.' }
          ],
          practiceSkills: [
            { label: 'Compute posteriors', templateIds: ['prob-bayes-1', 'prob-bayes-2', 'prob-bayes-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'expectation-risk',
      slug: 'expectation-risk',
      title: 'Expectation and risk',
      summary: 'Expected value as a weighted average and as a decision-making tool.',
      conceptualContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/expectation-risk/conceptual.md',
      mathContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/expectation-risk/math.md',
      sources: [
            { label: 'OpenStax', href: 'https://openstax.org/subjects/math', note: 'Expectation and variance foundations.' },
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Probabilistic modeling and expected value examples.' }
          ],
          practiceSkills: [
            { label: 'Posterior and expectation numeracy', templateIds: ['prob-bayes-2'] }
          ],
          moveOnThreshold: 90
        }
      ]
    },
    {
      id: 'cs-optimization',
      slug: 'unit3-optimization',
      title: 'Unit 3 — Optimization',
      summary: 'Convexity, gradients, and iterative updates for training models.',
      order: 3,
      estimatedMinutes: 180,
      shared: false,
      sections: [
        {
          id: 'gradient-descent',
      slug: 'gradient-descent',
      title: 'Gradient descent',
      summary: 'Following the negative gradient to reduce an objective function.',
      conceptualContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/gradient-descent/conceptual.md',
      mathContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/gradient-descent/math.md',
      sources: [
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Optimization lectures and gradient intuition.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'First-order optimization for ML.' }
          ],
          practiceSkills: [
            { label: 'Single-step updates', templateIds: ['opt-gradient-descent-1', 'opt-gradient-descent-2', 'opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        },
        {
          id: 'convexity',
      slug: 'convexity',
      title: 'Convexity',
      summary: 'Why bowl-shaped objectives are easier to optimize and reason about.',
      conceptualContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/convexity/conceptual.md',
      mathContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/convexity/math.md',
      sources: [
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Convex optimization intuition and examples.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Optimization landscape framing.' }
          ],
          practiceSkills: [
            { label: 'Global-vs-local minima reasoning', templateIds: ['opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        }
      ]
    }
  ]
}

export const tracks = [engineeringTrack, csmlTrack]

export const trackRegistry = Object.fromEntries(tracks.map((track) => [track.slug, track])) as Record<string, Track>

export const getUnit = (trackSlug: string, unitSlug: string) => trackRegistry[trackSlug]?.units.find((unit) => unit.slug === unitSlug)

export const getSection = (trackSlug: string, unitSlug: string, sectionSlug: string) =>
  getUnit(trackSlug, unitSlug)?.sections.find((section) => section.slug === sectionSlug)
