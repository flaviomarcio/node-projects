const connect = require('../config/rabbitmq');

async function consumeMessages(queue) {
    const { channel } = await connect();
    await channel.assertQueue(queue, { durable: true });

    console.log(`🎧 Aguardando mensagens na fila: ${queue}`);

    channel.consume(queue, (message) => {
        console.log(`📥 Mensagem recebida: ${message.content.toString()}`);
        channel.ack(message); // Confirma o processamento da mensagem
    });
}

// Teste
consumeMessages('nodejs-api-mvc-swagger-vault-rabbitmq-amqp');
