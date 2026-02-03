'use strict';

const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://rabbitmq';
const QUEUE = 'calculs';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function connectRabbit() {
  while (true) {
    try {
      console.log('connexion RabbitMQ...');
      const connection = await amqp.connect(RABBITMQ_URL);
      const channel = await connection.createChannel();
      await channel.assertQueue(QUEUE);
      console.log('Consumer connecté à RabbitMQ');
      return channel;
    } catch (err) {
      console.log('RabbitMQ pas prêt, retry dans 3s');
      await sleep(3000);
    }
  }
}

async function start() {
  const channel = await connectRabbit();

  channel.consume(QUEUE, (msg) => {
    if (!msg) return;
    console.log('Message reçu');
    channel.ack(msg);
  });
}

start();
