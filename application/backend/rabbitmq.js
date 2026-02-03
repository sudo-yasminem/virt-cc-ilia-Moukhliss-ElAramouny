'use strict';

const amqp = require('amqplib');

const QUEUE = 'calculs';
let channel;

async function initRabbit() {
  const connection = await amqp.connect('amqp://localhost');
  channel = await connection.createChannel();
  await channel.assertQueue(QUEUE);
  console.log('RabbitMQ connecté');
}

function sendToQueue(message) {
  channel.sendToQueue(
    'calculs',
    Buffer.from(JSON.stringify(message))
  );
}

module.exports = { initRabbit, sendToQueue };
