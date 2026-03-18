import { Card, Badge } from '@/components/ui'

export const QuestionCard = ({ prompt, topic }: { prompt: string; topic: string }) => (
  <Card>
    <Badge>{topic}</Badge>
    <p className='mt-4 text-lg'>{prompt}</p>
  </Card>
)
