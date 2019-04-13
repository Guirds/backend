const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    });
});

mongoose.connect(
    'mongodb+srv://omnistack:123@cluster0-btyeh.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true,
    }
);


//Middleware
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());//permite leitura dos dados em json 
app.use(express.urlencoded({ extended: true })); // permite envio de arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'tmp')));


app.use(require('./routes'));

server.listen(process.env.PORT || 3333); // process.env.PORT está definindo a variavel
//de ambiente, para que a aplicação consiga rodas em diferente ambientes || caso não
//consiga acesso com variavel de ambiente  
