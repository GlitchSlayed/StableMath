import { readFile } from 'node:fs/promises'
import path from 'node:path'

export type MarkdownBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'list'; items: string[] }

const normalizeLineEndings = (content: string) => content.replace(/\r\n/g, '\n').trim()

const parseMarkdownBlocks = (content: string): MarkdownBlock[] => {
  const blocks = normalizeLineEndings(content)
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.map((block) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
    const isList = lines.every((line) => /^[-*]\s+/.test(line))

    if (isList) {
      return {
        type: 'list',
        items: lines.map((line) => line.replace(/^[-*]\s+/, '').trim())
      }
    }

    return {
      type: 'paragraph',
      content: lines.join(' ')
    }
  })
}

export const loadMarkdownBlocks = async (filePath: string) => {
  const content = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return parseMarkdownBlocks(content)
}
