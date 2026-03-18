import { derivativeTemplates } from './calculus/derivatives'
import { eigenvalueTemplates } from './linear-algebra/eigenvalues'
import { bayesTemplates } from './probability/bayes'
import { gradientDescentTemplates } from './optimization/gradientDescent'

export const templates = [
  ...derivativeTemplates,
  ...eigenvalueTemplates,
  ...bayesTemplates,
  ...gradientDescentTemplates
]

export const templateRegistry = Object.fromEntries(templates.map((template) => [template.id, template]))
