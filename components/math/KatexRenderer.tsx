import { renderKatex } from '@/lib/utils/katex'

export const KatexRenderer = ({ expression, displayMode = false }: { expression: string; displayMode?: boolean }) => (
  <div className='katex-scroll' dangerouslySetInnerHTML={{ __html: renderKatex(expression, displayMode) }} />
)
