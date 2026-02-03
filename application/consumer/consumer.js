'use strict';

const amqp = require('amqplib');
const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: 6379
});

async function start() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue('calculs');

  console.log('Connexion consumer -> RabbitMQ');

  channel.consume('calculs', async (msg) => {
    const { operation, a, b } = JSON.parse(msg.content.toString());
    let resultat;

    switch (operation) {
      case 'addition':
        resultat = a + b;
        break;
      case 'soustraction':
        resultat = a - b;
        break;
      case 'multiplication':
        resultat = a * b;
        break;
      case 'division':
        resultat = b === 0 ? null : a / b;
        break;
      case 'racine':
        resultat = Math.sqrt(a);
        break;
      case 'pourcentage':
        resultat = a * 0.01;
        break;
      default:
        resultat = null;
    }

    await redis.set('last_result', resultat);
    channel.ack(msg);

    console.log(`✅ ${operation} → ${resultat}`);
  });
}

start();
