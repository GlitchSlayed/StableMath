import { KatexRenderer } from './KatexRenderer'

export const InlineMath = ({ expression }: { expression: string }) => <span className='inline-block align-middle'><KatexRenderer expression={expression} /></span>
