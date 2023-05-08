import trpc from '$lib/trpc'
import type { Load } from '@sveltejs/kit'

export const prerender = false
export const ssr = false

export const load: Load = async () => {
  const [trpcMsg, prismaMsg] = await Promise.all([
    trpc.greetings.hello.query(),
    trpc.greetings.helloFromPrisma.query()
  ])

  await new Promise((r) => setTimeout(r, 2000))
  
  return {
    trpcMsg,
    prismaMsg,
  }
}