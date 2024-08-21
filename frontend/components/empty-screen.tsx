import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import Player from 'react-lottie-player'

export function EmptyScreen({disableAnimations = false}) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg text-center font-semibold">
          Welcome to KeyChain AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground text-center">
          Deploy smart contract with AI
        </p>
        {/*<p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="#">
            React Server Components
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM. The UI state
          is synced through the SDK so the model is aware of your interactions
          as they happen.
        </p>*/}

        <div className="grid-row-3 my-5 mb-8 grid grid-flow-row gap-1 md:grid-flow-col md:gap-4">
          <div className="mx-3 grid grid-cols-3 content-center gap-1 md:grid-cols-1 md:gap-4">
            <Player
              play = {!disableAnimations}
              loop={false}
              speed={0.5}
              direction={-1}
              path="/lotties/puzzle.json"
              className="size-24 md:h-32 md:w-full"
            />
            <div className="col-span-2 mt-4 text-left md:col-span-1 md:mt-0 md:text-center">
              <h3 className="font-bold md:mb-2">Generate</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Generate custom smart contracts using a prompt.
              </p>
            </div>
          </div>

          <div className="mx-3 grid grid-cols-3 content-center gap-1 md:grid-cols-1 md:gap-4">
            <Player
              play = {!disableAnimations}
              loop={false}
              speed={0.5}
              direction={1}
              path="/lotties/globe.json"
              className="size-24 md:h-32 md:w-full"
            />
            <div className="col-span-2 mt-4 text-left md:col-span-1 md:mt-0 md:text-center">
              <h3 className="font-bold md:mb-2">Deploy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deploy your smart contracts from the chat.
              </p>
            </div>
          </div>
          <div className="mx-3 grid grid-cols-3 content-center gap-1 md:grid-cols-1 md:gap-4">
            <Player
              play = {!disableAnimations}
              loop={false}
              speed={0.5}
              path="/lotties/clock.json"
              className="size-24 md:h-32 md:w-full"
            />

            <div className="col-span-2 mt-4 text-left md:col-span-1 md:mt-0 md:text-center">
              <h3 className="font-bold md:mb-2">Speed Up</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Code faster by skipping long and complex setups.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
