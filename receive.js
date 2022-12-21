const amqp=require("amqplib")
var channel,connection;
async function connect() {

    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("MYQUEUE");
}

connect().then(() => {
    channel.consume("MYQUEUE",(msg)=>{
        console.log(msg.content.toString());
    });
});