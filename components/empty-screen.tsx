import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Japan astronaut to walk on the Moon',
    message: 'Japan astronaut to walk on the Moon'
  },
  {
    heading: 'What is dall-e and how does it work?',
    message: 'What is dall-e and how does it work?'
  },
  {
    heading: 'Meta custom AI processor',
    message: 'Meta custom AI processor'
  },
  {
    heading: 'Musk thinks AI outsmarts us by 2026',
    message: 'Musk thinks AI outsmarts us by 2026'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
