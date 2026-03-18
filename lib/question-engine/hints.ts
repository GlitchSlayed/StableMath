export const hintTrees = {
  'calc-power-rule-1': [
    'Identify the coefficient and exponent before differentiating.',
    'Multiply the coefficient by the exponent.',
    'Reduce the exponent by one after multiplying.'
  ],
  'calc-chain-rule-2': [
    'Name the outer function and the inner function separately.',
    'Differentiate the outer function while keeping the inner expression in place.',
    'Now multiply by the derivative of the inner expression.'
  ],
  'la-eigenvalues-2': [
    'Start with det(A - λI) = 0.',
    'For a 2×2 matrix, expand (a-λ)(d-λ)-bc.',
    'Solve the resulting quadratic for λ.'
  ],
  'prob-bayes-2': [
    'Write the posterior you want before doing arithmetic.',
    'Compute the numerator P(B|A)P(A).',
    'Normalize by the full evidence probability P(B).'
  ],
  'opt-gradient-descent-1': [
    'Gradient descent moves opposite the gradient.',
    'Multiply the gradient by the learning rate.',
    'Subtract that quantity from the current point.'
  ]
} as const
