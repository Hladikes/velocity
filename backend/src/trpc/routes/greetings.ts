import { router, publicProcedure } from '../router'
import prisma from '../../prisma'

export const greetingsRouter = router({
  hello: publicProcedure.query(() => {
    return `Hello, from TRPC!`
  }),
  helloFromPrisma: publicProcedure.query(async () => {
    let post = await prisma.post.findFirst()

    if (!post) {
      post = await prisma.post.create({
        data: {
          msg: 'Hello, from Prisma!',
        },
        select: {
          id: true,
          msg: true,
        }
      })
    }
    
    return post
  })
})