'use strict'
import redis from "./redis/client.js";

const Fastify = require('fastify')
const app = require("./app")
const {initRabbit} = require('./rabbitmq');

const server = Fastify({
    logger: {
        level: "warn"
    }
})

server.register(app)

const start = async () => {
    try {

        initRabbit()
        await server.listen({port: 3000, host: '127.0.0.1'})
        console.log("Server running on 3000")
    } catch (err) {
        console.log(err)
        server.log.error(err)
        process.exit(1)
    }
}

start()
