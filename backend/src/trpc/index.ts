import { router } from './router'
import { greetingsRouter } from './routes/greetings'
 
export const appRouter = router({
  greetings: greetingsRouter,
})
 
export type AppRouter = typeof appRouter