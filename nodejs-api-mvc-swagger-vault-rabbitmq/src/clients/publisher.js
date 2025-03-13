const connect = require('../config/rabbitmq');

async function publishMessage(queue, message) {
    const { channel, connection } = await connect();
    await channel.assertQueue(queue, { durable: true });

    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`📨 RabbitMQ: Mensagem enviada: ${message}`);

    setTimeout(() => {
        connection.close();
        console.log('🔌 RabbitMQ: Conexão de envio encerrada.');
    }, 500);
}

// Teste
publishMessage('nodejs-api-mvc-swagger-vault-rabbitmq-amqp', 'Olá, RabbitMQ!');
