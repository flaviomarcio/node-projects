const amqp = require('amqplib');

const RABBITMQ_URL = 'amqp://user:password@localhost:5672';

async function connect() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();

        console.log('🐰 Conectado ao RabbitMQ!');

        return { connection, channel };
    } catch (error) {
        console.error('Erro ao conectar ao RabbitMQ', error);
        process.exit(1);
    }
}

module.exports = connect;
