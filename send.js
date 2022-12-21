const amqp=require("amqplib")

var channel;
async function connect() {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("MYQUEUE");
}

connect().then(() => {
    channel.sendToQueue("MYQUEUE", Buffer.from("data 1"));
});