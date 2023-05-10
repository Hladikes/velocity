import trpc from '$lib/trpc'
import { protect } from '$lib/auth'
import type { Load } from '@sveltejs/kit'

export const load: Load = async () => {
  protect()

  const [trpcMsg, prismaMsg] = await Promise.all([
    trpc.greetings.hello.query(),
    trpc.greetings.helloFromPrisma.query()
  ])

  await new Promise((r) => setTimeout(r, 500))
  
  return {
    trpcMsg,
    prismaMsg,
  }
}