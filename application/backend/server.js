'use strict'

const Fastify = require('fastify')
const app = require("./app")
const server = Fastify({ logger: {
                                    level: "warn"
                                   }
})

server.register(app)

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '127.0.0.1' })
    console.log("Server running on 3000")
  } catch (err) {
      console.log(err)
      server.log.error(err)
      process.exit(1)
  }
}

start()
