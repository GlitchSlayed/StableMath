import { Fragment } from 'react'
import { renderKatex } from '@/lib/utils/katex'

type Segment = {
  type: 'text' | 'inline' | 'block'
  value: string
}

const parseMathSegments = (text: string): Segment[] => {
  const segments: Segment[] = []
  let index = 0

  while (index < text.length) {
    const blockStart = text.indexOf('$$', index)
    const inlineStart = text.indexOf('$', index)

    let nextStart = -1
    let nextType: 'inline' | 'block' | null = null

    if (blockStart !== -1 && (inlineStart === -1 || blockStart <= inlineStart)) {
      nextStart = blockStart
      nextType = 'block'
    } else if (inlineStart !== -1) {
      nextStart = inlineStart
      nextType = 'inline'
    }

    if (nextStart === -1 || nextType === null) {
      segments.push({ type: 'text', value: text.slice(index) })
      break
    }

    if (nextStart > index) {
      segments.push({ type: 'text', value: text.slice(index, nextStart) })
    }

    const delimiter = nextType === 'block' ? '$$' : '$'
    const contentStart = nextStart + delimiter.length
    const end = text.indexOf(delimiter, contentStart)

    if (end === -1) {
      segments.push({ type: 'text', value: text.slice(nextStart) })
      break
    }

    segments.push({ type: nextType, value: text.slice(contentStart, end).trim() })
    index = end + delimiter.length
  }

  return segments.filter((segment) => segment.value.length > 0)
}

export const InlineMathText = ({ as = 'p', text, className = '' }: { as?: 'p' | 'li'; text: string; className?: string }) => {
  const Tag = as
  const segments = parseMathSegments(text)

  return (
    <Tag className={className}>
      {segments.map((segment, index) => {
        if (segment.type === 'text') {
          return <Fragment key={`${segment.type}-${index}`}>{segment.value}</Fragment>
        }

        if (segment.type === 'block') {
          return (
            <div
              key={`${segment.type}-${index}`}
              className='katex-scroll my-4'
              dangerouslySetInnerHTML={{ __html: renderKatex(segment.value, true) }}
            />
          )
        }

        return (
          <span
            key={`${segment.type}-${index}`}
            className='katex-scroll inline-block align-middle'
            dangerouslySetInnerHTML={{ __html: renderKatex(segment.value) }}
          />
        )
      })}
    </Tag>
  )
}
