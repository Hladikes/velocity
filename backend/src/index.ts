import { createExpressMiddleware } from '@trpc/server/adapters/express'
import express from 'express'
import cors from 'cors'
import { appRouter } from './trpc'
import prisma from './prisma'

;(async () => {
  await prisma.$connect()

  const app = express()
  const port = 8080
  
  app.use(cors())
  app.get('/', (_req, res) => res.send('Server is running!'))

  app.use('/trpc', createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  }))

  app.listen(port, () => {
    console.log(`[i] Server is running at :: ${port}`)
  })
})().catch(async (e) => {
  await prisma.$disconnect()
  console.error(`[x] An error has occoured`, e)
})