import Fastify from 'fastify'
import logger from "./config/logger.js"

const fastify = Fastify({
    logger: true
})

fastify.get('/v1/test', async function handler (request, reply){
    return { message: 'test'}
})

fastify.lister({port: 3000},(err, address) => {
    if(err){
        fastify.log.error(err);
        process.exit(1)
    }
    fastify.log.info("Running on port3000")
});