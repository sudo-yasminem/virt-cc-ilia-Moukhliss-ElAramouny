'use strict';

const Redis = require('ioredis');

// Connexion Redis (Docker ou local)
const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
});

redis.on('connect', () => {
  console.log('Redis connecté');
});

redis.on('error', (err) => {
  console.error('Redis erreur:', err);
});

module.exports = redis;


