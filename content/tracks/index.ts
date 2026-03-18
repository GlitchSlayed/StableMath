import type { Source, Subsection, Track, Unit } from '@/content/schema'

const source = (label: string, href: string, note: string): Source => ({ label, href, note })

const section = (config: Subsection): Subsection => config

const sharedFoundationsUnit: Unit = {
  id: 'shared-foundations',
  slug: 'shared-foundations',
  title: 'Shared Unit — Mathematical Foundations',
  summary: 'A shared bridge unit for functions, linear algebra language, and optimization intuition used across engineering and ML.',
  order: 0,
  estimatedMinutes: 160,
  shared: true,
  sections: [
    section({
      id: 'functions-modeling',
      slug: 'functions-modeling',
      title: 'Functions as models',
      summary: 'How formulas map inputs to outputs and why that framing drives both mechanics and machine learning.',
      conceptualContentPath: 'content/section-pages/shared/shared-foundations/functions-modeling/conceptual.md',
      mathContentPath: 'content/section-pages/shared/shared-foundations/functions-modeling/math.md',
      sources: [
        source('LibreTexts', 'https://math.libretexts.org', 'Function language, multiple representations, and algebra review.'),
        source('OpenStax', 'https://openstax.org/subjects/math', 'Precalculus framing for functions, inverses, and transformations.'),
        source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Modeling mindset and variable interpretation.')
      ],
      practiceSkills: [
        { label: 'Differentiate simple monomials', templateIds: ['calc-power-rule-1', 'calc-power-rule-2'] },
        { label: 'Interpret composite transformations', templateIds: ['calc-chain-rule-1'] }
      ],
      moveOnThreshold: 90
    }),
    section({
      id: 'vectors-matrices',
      slug: 'vectors-matrices',
      title: 'Vectors and matrices',
      summary: 'Shared linear algebra language for forces, data tables, and parameter spaces.',
      conceptualContentPath: 'content/section-pages/shared/shared-foundations/vectors-matrices/conceptual.md',
      mathContentPath: 'content/section-pages/shared/shared-foundations/vectors-matrices/math.md',
      sources: [
        source('OpenStax', 'https://openstax.org/subjects/math', 'Linear algebra fundamentals.'),
        source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Geometric interpretation of linear transformations.'),
        source('Deep Learning Book', 'https://www.deeplearningbook.org', 'Vectorized computation and matrix notation in ML.')
      ],
      practiceSkills: [
        { label: 'Reason about eigendirections', templateIds: ['lin-eigen-1', 'lin-eigen-2'] }
      ],
      moveOnThreshold: 90
    })
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
        section({
          id: 'limits-continuity',
          slug: 'limits-continuity',
          title: 'Limits and continuity',
          summary: 'Approaching a value, understanding local behavior, and distinguishing existence from substitution.',
          conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/limits-continuity/conceptual.md',
          mathContentPath: 'content/section-pages/engineering/unit1-calc1/limits-continuity/math.md',
          sources: [
            source('LibreTexts', 'https://math.libretexts.org', 'Limit laws and continuity examples.'),
            source('OpenStax', 'https://openstax.org/subjects/math', 'Calculus volume treatment of limits.')
          ],
          practiceSkills: [
            { label: 'Differentiate nearby algebraic forms', templateIds: ['calc-power-rule-1'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'derivative-rules',
          slug: 'derivative-rules',
          title: 'Derivative rules',
          summary: 'Power, product, quotient, and chain rule fluency for engineering rate-of-change questions.',
          conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/derivative-rules/conceptual.md',
          mathContentPath: 'content/section-pages/engineering/unit1-calc1/derivative-rules/math.md',
          sources: [
            source('LibreTexts', 'https://math.libretexts.org', 'Core derivative rule worked examples.'),
            source('OpenStax', 'https://openstax.org/subjects/math', 'Rule-based differentiation and interpretation.'),
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Conceptual framing for rates and local linearity.')
          ],
          practiceSkills: [
            { label: 'Power rule fluency', templateIds: ['calc-power-rule-1', 'calc-power-rule-2', 'calc-power-rule-3'] },
            { label: 'Chain rule fluency', templateIds: ['calc-chain-rule-1', 'calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'integral-accumulation',
          slug: 'integral-accumulation',
          title: 'Integrals and accumulation',
          summary: 'Net area, antiderivatives, and accumulation functions that reverse differentiation.',
          conceptualContentPath: 'content/section-pages/engineering/unit1-calc1/integral-accumulation/conceptual.md',
          mathContentPath: 'content/section-pages/engineering/unit1-calc1/integral-accumulation/math.md',
          sources: [
            source('LibreTexts', 'https://math.libretexts.org', 'FTC and substitution examples.'),
            source('OpenStax', 'https://openstax.org/subjects/math', 'Accumulation function interpretations.')
          ],
          practiceSkills: [
            { label: 'Chain-rule structure recognition', templateIds: ['calc-chain-rule-2', 'calc-chain-rule-3'] }
          ],
          moveOnThreshold: 90
        })
      ]
    },
    {
      id: 'eng-diffeq',
      slug: 'unit2-differential-equations',
      title: 'Unit 2 — Differential Equations',
      summary: 'Modeling dynamical systems with first-order equations, feedback, and oscillatory behavior.',
      order: 2,
      estimatedMinutes: 240,
      shared: false,
      sections: [
        section({
          id: 'first-order-models',
          slug: 'first-order-models',
          title: 'First-order models',
          summary: 'How growth, decay, mixing, and cooling become equations driven by current state.',
          conceptualContentPath: 'content/section-pages/engineering/unit2-differential-equations/first-order-models/conceptual.md',
          mathContentPath: 'content/section-pages/engineering/unit2-differential-equations/first-order-models/math.md',
          sources: [
            source('OpenStax', 'https://openstax.org/subjects/math', 'Introductory differential equations modeling examples.'),
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Physical modeling with first-order systems.')
          ],
          practiceSkills: [
            { label: 'Rate-law interpretation', templateIds: ['calc-power-rule-2', 'calc-chain-rule-1'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'second-order-dynamics',
          slug: 'second-order-dynamics',
          title: 'Second-order dynamics',
          summary: 'Acceleration, damping, and forcing in mechanical and electrical system models.',
          conceptualContentPath: 'content/section-pages/engineering/unit2-differential-equations/second-order-dynamics/conceptual.md',
          mathContentPath: 'content/section-pages/engineering/unit2-differential-equations/second-order-dynamics/math.md',
          sources: [
            source('LibreTexts', 'https://math.libretexts.org', 'Second-order equation solution structure and examples.'),
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Oscillation and damping intuition.')
          ],
          practiceSkills: [
            { label: 'System response interpretation', templateIds: ['calc-chain-rule-2', 'calc-power-rule-3'] }
          ],
          moveOnThreshold: 90
        })
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
        section({
          id: 'bayesian-reasoning',
          slug: 'bayesian-reasoning',
          title: 'Bayesian reasoning',
          summary: 'How priors and evidence combine into posterior beliefs.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/bayesian-reasoning/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/bayesian-reasoning/math.md',
          sources: [
            source('OpenStax', 'https://openstax.org/subjects/math', 'Conditional probability and Bayes basics.'),
            source('LibreTexts', 'https://math.libretexts.org', 'Worked Bayes examples and probability trees.'),
            source('Deep Learning Book', 'https://www.deeplearningbook.org', 'Probabilistic modeling mindset.')
          ],
          practiceSkills: [
            { label: 'Compute posteriors', templateIds: ['prob-bayes-1', 'prob-bayes-2', 'prob-bayes-3'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'expectation-risk',
          slug: 'expectation-risk',
          title: 'Expectation and risk',
          summary: 'Expected value as a weighted average and as a decision-making tool.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/expectation-risk/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit2-probability/expectation-risk/math.md',
          sources: [
            source('OpenStax', 'https://openstax.org/subjects/math', 'Expectation and variance foundations.'),
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Probabilistic modeling and expected value examples.')
          ],
          practiceSkills: [
            { label: 'Posterior and expectation numeracy', templateIds: ['prob-bayes-2'] }
          ],
          moveOnThreshold: 90
        })
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
        section({
          id: 'gradient-descent',
          slug: 'gradient-descent',
          title: 'Gradient descent',
          summary: 'Following the negative gradient to reduce an objective function.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/gradient-descent/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/gradient-descent/math.md',
          sources: [
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Optimization lectures and gradient intuition.'),
            source('Deep Learning Book', 'https://www.deeplearningbook.org', 'First-order optimization for ML.')
          ],
          practiceSkills: [
            { label: 'Single-step updates', templateIds: ['opt-gradient-descent-1', 'opt-gradient-descent-2', 'opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'convexity',
          slug: 'convexity',
          title: 'Convexity',
          summary: 'Why bowl-shaped objectives are easier to optimize and reason about.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/convexity/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit3-optimization/convexity/math.md',
          sources: [
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Convex optimization intuition and examples.'),
            source('Deep Learning Book', 'https://www.deeplearningbook.org', 'Optimization landscape framing.')
          ],
          practiceSkills: [
            { label: 'Global-vs-local minima reasoning', templateIds: ['opt-gradient-descent-3'] }
          ],
          moveOnThreshold: 90
        })
      ]
    },
    {
      id: 'cs-linear-models',
      slug: 'unit4-linear-models',
      title: 'Unit 4 — Linear Models & Representation',
      summary: 'Connecting matrix algebra to regression, feature geometry, and representation learning.',
      order: 4,
      estimatedMinutes: 200,
      shared: false,
      sections: [
        section({
          id: 'linear-regression-geometry',
          slug: 'linear-regression-geometry',
          title: 'Linear regression geometry',
          summary: 'Why least squares is a projection problem and how design matrices organize data.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit4-linear-models/linear-regression-geometry/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit4-linear-models/linear-regression-geometry/math.md',
          sources: [
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Least-squares geometry and projection viewpoints.'),
            source('Deep Learning Book', 'https://www.deeplearningbook.org', 'Linear models and optimization framing.')
          ],
          practiceSkills: [
            { label: 'Matrix-model interpretation', templateIds: ['lin-eigen-1', 'opt-gradient-descent-1'] }
          ],
          moveOnThreshold: 90
        }),
        section({
          id: 'embeddings-and-similarity',
          slug: 'embeddings-and-similarity',
          title: 'Embeddings and similarity',
          summary: 'How vector spaces encode semantic structure, retrieval, and nearest-neighbor reasoning.',
          conceptualContentPath: 'content/section-pages/cs-ml-ai/unit4-linear-models/embeddings-and-similarity/conceptual.md',
          mathContentPath: 'content/section-pages/cs-ml-ai/unit4-linear-models/embeddings-and-similarity/math.md',
          sources: [
            source('Deep Learning Book', 'https://www.deeplearningbook.org', 'Representation learning and feature geometry.'),
            source('MIT OpenCourseWare', 'https://ocw.mit.edu', 'Similarity metrics and vector-space reasoning.')
          ],
          practiceSkills: [
            { label: 'Similarity reasoning', templateIds: ['lin-eigen-2', 'opt-gradient-descent-2'] }
          ],
          moveOnThreshold: 90
        })
      ]
    }
  ]
}

export const tracks = [engineeringTrack, csmlTrack]

export const trackRegistry = Object.fromEntries(tracks.map((track) => [track.slug, track])) as Record<string, Track>

export const getUnit = (trackSlug: string, unitSlug: string) => trackRegistry[trackSlug]?.units.find((unit) => unit.slug === unitSlug)

export const getSection = (trackSlug: string, unitSlug: string, sectionSlug: string) =>
  getUnit(trackSlug, unitSlug)?.sections.find((sectionItem) => sectionItem.slug === sectionSlug)
