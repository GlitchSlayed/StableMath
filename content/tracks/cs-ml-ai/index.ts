import type { Track } from '@/content/schema'

export const csmlTrack: Track = {
  id: 'cs-ml-ai',
  slug: 'cs-ml-ai',
  title: 'CS & ML',
  audience: 'Learners connecting mathematical ideas to machine learning systems.',
  description: 'Linear algebra, probability, optimization, and information theory for ML practice.',
  sharedTopicIds: ['linear-algebra-core'],
  units: [
    { id: 'cs-linear-algebra', slug: 'unit1-linear-algebra', title: 'Unit 1 — Linear Algebra for ML', summary: 'Norms, matrix multiplication, eigendecomposition, rank, and null space.', order: 1, estimatedMinutes: 180, topics: [] },
    { id: 'cs-probability', slug: 'unit2-probability', title: 'Unit 2 — Probability & Statistics', summary: 'Conditional probability, Bayes, expectation, variance, and Gaussian models.', order: 2, estimatedMinutes: 180, topics: [
      { id: 'bayes', title: "Bayes' theorem", summary: 'Posterior reasoning from priors and evidence.', lessonPath: 'bayes.mdx', practiceTemplateIds: ['prob-bayes-1', 'prob-bayes-2'] },
      { id: 'expectation', title: 'Expectation', summary: 'Weighted averages for discrete distributions.', lessonPath: 'expectation.mdx', practiceTemplateIds: ['prob-bayes-3'] }
    ] },
    { id: 'cs-optimization', slug: 'unit3-optimization', title: 'Unit 3 — Optimization', summary: 'Convexity, gradient descent, and loss landscapes.', order: 3, estimatedMinutes: 180, topics: [
      { id: 'gradient-descent', title: 'Gradient descent', summary: 'Update rules and learning-rate intuition.', lessonPath: 'gradient-descent.mdx', practiceTemplateIds: ['opt-gradient-descent-1', 'opt-gradient-descent-2'] },
      { id: 'convexity', title: 'Convexity', summary: 'Why some objectives are easier to optimize.', lessonPath: 'convexity.mdx', practiceTemplateIds: ['opt-gradient-descent-3'] }
    ] },
    { id: 'cs-info-theory', slug: 'unit4-info-theory', title: 'Unit 4 — Information Theory', summary: 'Entropy, KL divergence, and cross-entropy.', order: 4, estimatedMinutes: 120, topics: [] },
    { id: 'cs-graph-theory', slug: 'unit5-graph-theory', title: 'Unit 5 — Graph Theory', summary: 'Traversals, connectivity, and network reasoning.', order: 5, estimatedMinutes: 120, topics: [] },
    { id: 'cs-calculus-ml', slug: 'unit6-calculus-ml', title: 'Unit 6 — Calculus for ML', summary: 'Differentiation and multivariable reasoning for objective functions.', order: 6, estimatedMinutes: 120, topics: [] }
  ]
}
