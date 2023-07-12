import { FastifyInstance } from 'fastify'
import { knex } from '../src/database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function desculpaRoutes(server: FastifyInstance) {
  // POST
  server.post('/', async (request, response) => {
    // Criação do Schema
    const createDesculpaSchema = z.object({
      categoria: z.enum([
        'amizade',
        'relacionamento',
        'familia',
        'trabalho',
        'estudo',
        'outros',
      ]),
      descricao: z.string(),
    })

    // Validação do Schema
    const { categoria, descricao } = createDesculpaSchema.parse(request.body)

    // Inserção no banco de dados
    await knex('desculpas').insert({
      id: randomUUID(),
      categoria,
      descricao,
    })

    // Retorno
    return response.status(201).send()
  })

  // GET
  server.get('/', async () => {
    const desculpas = await knex('desculpas').select('*')

    return {
      desculpas,
    }
  })
}
