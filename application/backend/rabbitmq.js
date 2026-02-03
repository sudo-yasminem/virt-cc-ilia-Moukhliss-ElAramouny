'use strict';

const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://rabbitmq';
const QUEUE = 'calculs';

let channel = null;

async function getChannel() {
  if (channel) return channel;

  console.log('Backend : connexion à RabbitMQ...');

  while (true) { // Boucle infinie jusqu'à succès
    try {
      const connection = await amqp.connect(RABBITMQ_URL);

      // Gestion de la fermeture inattendue de la connexion
      connection.on('error', (err) => {
        console.error("Erreur de connexion RabbitMQ", err);
        channel = null;
      });

      channel = await connection.createChannel();
      await channel.assertQueue(QUEUE);
      console.log('Backend connecté à RabbitMQ');
      return channel;

    } catch (err) {
      console.log("RabbitMQ n'est pas encore prêt");
      await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre 2s
    }
  }
}

module.exports = { getChannel };