'use strict'


const Fastify = require('fastify')
const app = require("./app")
const {getChannel} = require('./rabbitmq');

const server = Fastify({
    logger: {
        level: "warn"
    }
})

server.register(app)

const start = async () => {
    try {
        await getChannel()

        await server.listen({port: 3000, host: '0.0.0.0'})
        console.log("Server running on 3000")
    } catch (err) {
        console.log("Erreur",err);
        server.log.error(err);
        process.exit(1);
    }
}

start()
