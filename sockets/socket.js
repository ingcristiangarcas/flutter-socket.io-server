const {io} = require('../index');



//Mensajes de Sockets

io.on('connection', (client) => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });


    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);
        io.emit('mensaje',{admin: 'nuevo mensaje'});
    });

    client.on('emitir-mensaje', (payload) => {
       // io.emit('nuevo-mensaje', payload); // esto es para todos incluyendo a quien emite
       client.broadcast.emit('nuevo-mensaje', payload); //esto es para todos menos el que emite
    });    

});