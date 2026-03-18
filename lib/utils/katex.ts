import katex from 'katex'

export const renderKatex = (expression: string, displayMode = false) => katex.renderToString(expression, {
  displayMode,
  throwOnError: false,
  strict: 'ignore'
})
