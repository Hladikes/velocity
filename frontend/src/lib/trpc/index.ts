import { env } from '$env/dynamic/public'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@backend/trpc'

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: env.PUBLIC_TRPC_URL,
    })
  ]
})

export default client