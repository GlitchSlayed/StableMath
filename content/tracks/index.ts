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
      conceptualOverview: [
        'A function is a rule that assigns exactly one output to each permitted input, which makes it a reliable model for systems and data transformations.',
        'LibreTexts and OpenStax both emphasize multiple representations—equations, graphs, tables, and words—because real fluency comes from moving between them.',
        'MIT OCW-style problem solving treats functions as reusable abstractions: define the variables, state the domain, and interpret what the output means before doing algebra.'
      ],
      mathConnections: [
        'Average rate of change on an interval is the slope of a secant line: Δy/Δx.',
        'Composition builds pipelines: if y=f(x) and z=g(y), then z=g(f(x)).',
        'Inverse functions undo transformations when the original rule is one-to-one on the chosen domain.'
      ],
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
      conceptualOverview: [
        'Vectors encode magnitude with direction, but in applied computing they also act as ordered feature collections.',
        'Matrices organize linear transformations and datasets; multiplying by a matrix combines scaling, rotation, projection, or aggregation into one operator.',
        'The Deep Learning Book treats vectors and matrices as the native language of modern computation, especially for representing batches of examples and learned parameters.'
      ],
      mathConnections: [
        'Dot products measure alignment and produce scalar summaries.',
        'Matrix-vector multiplication builds each output coordinate as a weighted sum of inputs.',
        'Eigenvectors identify directions preserved by a transformation up to scaling, which explains why they matter in dynamics and ML.'
      ],
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
          conceptualOverview: [
            'A limit asks what value a function approaches as the input gets close to a target, even if the function is undefined exactly there.',
            'Continuity matters in engineering because it formalizes “no jump” behavior, which is a prerequisite for many physical models.',
            'OpenStax and LibreTexts both frame limits as the language that lets us turn intuitive motion and approximation into precise calculus statements.'
          ],
          mathConnections: [
            'One-sided limits compare left-hand and right-hand approach values.',
            'If both one-sided limits agree, the two-sided limit exists.',
            'Continuity at a means f(a) exists, the limit exists, and they are equal.'
          ],
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
          conceptualOverview: [
            'The derivative is a local rate of change: it tells how output responds to an infinitesimal input change.',
            'Derivative rules exist so we can decompose complicated expressions into smaller patterns, instead of re-deriving first principles every time.',
            'MIT OCW-style work emphasizes interpretation alongside computation: the derivative is not just symbolic manipulation, but sensitivity of a model.'
          ],
          mathConnections: [
            'Power rule: d/dx[x^n]=n x^(n-1).',
            'Chain rule: d/dx[f(g(x))]=f’(g(x))·g’(x).',
            'Units matter: if x is seconds and y is meters, then dy/dx is meters per second.'
          ],
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
          conceptualOverview: [
            'Integrals accumulate small pieces into a total effect, such as distance from velocity or charge from current.',
            'The Fundamental Theorem of Calculus links derivatives and integrals into one coherent system: accumulation and instantaneous change are dual ideas.',
            'Good engineering intuition pairs geometry with algebra—an integral is both signed area and a physical total built from tiny contributions.'
          ],
          mathConnections: [
            'Antiderivatives reverse differentiation up to an additive constant.',
            'Definite integrals represent net signed accumulation over an interval.',
            'Substitution works by reversing the chain rule.'
          ],
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
          conceptualOverview: [
            'Bayes’ theorem is a bookkeeping rule for revising belief after seeing evidence.',
            'In ML, the same pattern appears when models combine prior assumptions with observed data or class evidence.',
            'The Deep Learning Book highlights probabilistic thinking because uncertainty is part of nearly every modeling pipeline.'
          ],
          mathConnections: [
            'Posterior = likelihood × prior / evidence.',
            'The evidence term normalizes all competing explanations.',
            'Confusing P(A|B) with P(B|A) is the classic reasoning trap this section targets.'
          ],
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
          conceptualOverview: [
            'Expectation summarizes a random quantity by averaging outcomes with their probabilities.',
            'The idea scales directly into ML as expected loss: optimize average performance over uncertain data draws.',
            'This section ties statistics intuition to model evaluation by making “average” precise.'
          ],
          mathConnections: [
            'For discrete X, E[X]=Σ x·P(X=x).',
            'Linearity of expectation lets us separate complicated sums into simpler pieces.',
            'Variance tracks spread around the expected value and matters for reliability.'
          ],
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
          conceptualOverview: [
            'Gradient descent is a local iterative improvement rule: compute the slope information, then step downhill.',
            'The method works because the gradient points in the direction of steepest increase, so the negative gradient is the steepest local decrease.',
            'The Deep Learning Book uses gradient-based optimization as the central training mechanism for modern neural networks.'
          ],
          mathConnections: [
            'One-dimensional update: x_(k+1)=x_k-η f’(x_k).',
            'Large learning rates can overshoot; tiny ones can stall progress.',
            'Convex objectives provide stronger guarantees that local descent finds a global minimum.'
          ],
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
          id: 'convex-loss-landscapes',
          slug: 'convex-loss-landscapes',
          title: 'Convex loss landscapes',
          summary: 'Why bowl-shaped objectives are easier to optimize than rugged ones.',
          conceptualOverview: [
            'A convex function bends upward, so any line segment between two points on its graph stays above the graph.',
            'That geometry matters computationally because it removes spurious local minima.',
            'Even when deep learning objectives are not convex, convex analysis still gives vocabulary for step size, curvature, and surrogate objectives.'
          ],
          mathConnections: [
            'For convex f, every local minimum is global.',
            'Second derivatives or Hessians help diagnose curvature near a point.',
            'Strong convexity gives faster convergence guarantees for gradient methods.'
          ],
          sources: [
            { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu', note: 'Convex sets, convex functions, and optimization theory.' },
            { label: 'Deep Learning Book', href: 'https://www.deeplearningbook.org', note: 'Optimization landscapes in ML.' }
          ],
          practiceSkills: [
            { label: 'Gradient-based movement intuition', templateIds: ['opt-gradient-descent-2'] }
          ],
          moveOnThreshold: 90
        }
      ]
    }
  ]
}

export const tracks = [engineeringTrack, csmlTrack]

export const trackRegistry = Object.fromEntries(tracks.map((track) => [track.slug, track]))

export const getUnit = (trackSlug: string, unitSlug: string) => trackRegistry[trackSlug]?.units.find((unit) => unit.slug === unitSlug)

export const getSection = (trackSlug: string, unitSlug: string, sectionSlug: string) => getUnit(trackSlug, unitSlug)?.sections.find((section) => section.slug === sectionSlug)
