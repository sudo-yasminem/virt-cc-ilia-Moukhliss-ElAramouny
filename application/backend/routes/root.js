'use strict'

const redis = require('../redis');
const { sendToQueue} = require('../rabbitmq')

module.exports = async function (fastify, opts) {

  fastify.get('/v2/test', async function (request, reply) {
    console.log("Helo")
    return { hello: "world" }
  })

  fastify.post("/v2/addition", async function (request, reply){
    const {a,b} = request.body
    sendToQueue({operation: 'addition', a, b})
    const resultat = a + b

    await redis.set('dernier_resultat', resultat)

    return {
      resultat: a + b
    }
  })

  fastify.post("/v2/soustraction", async function (request, reply){
    const {a,b} = request.body
    sendToQueue({operation: 'soustraction', a, b})
    const resultat = a - b;

    await redis.set('dernier_resultat', resultat)

    return {
      resultat: a - b
    }
  })

  fastify.post("/v2/multiplication", async function (request, reply){
    const{a,b} = request.body
    sendToQueue({operation: 'multiplication', a, b})
    const resultat = a*b

    await redis.set('dernier_resultat', resultat)

    return {
      resultat: a*b
    }
  })

  fastify.post("/v2/division", async function (request, reply){
    const {a,b} = request.body
    sendToQueue({operation: 'division', a, b})
    const resultat = a/b;

    return {
      resultat: a/b
    }
  })

  fastify.post("/v2/racine", async function (request, reply){
    const {a} = request.body

    return {
      resultat: Math.sqrt(a)
    }
  })

  fastify.post("/v2/pourcentage", async function (request, reply){
    const {a} = request.body

    return{
      resultat: a*(1/100)
    }
  })
}


