import { env } from '../env/env'
import fastify from 'fastify'
import { desculpaRoutes } from '../routes/desculpa'

const app = fastify()

app.register(desculpaRoutes, {
  prefix: '/desculpa',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server listening on http://localhost:3333')
  })
