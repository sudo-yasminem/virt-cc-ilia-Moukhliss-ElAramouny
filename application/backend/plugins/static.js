'use strict'

console.log('static plugin loaded')


const path = require('path')

module.exports = async function (fastify) {
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../../frontend'),
    prefix: '/', // http://localhost:3000/
  })
}
