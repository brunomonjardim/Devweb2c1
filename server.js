const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const app = express();

//a porta que vai ser usada para o sistema rodar
const port = process.env.PORT || 4001;
//exigindo a rota principal
const MainRouter = require('./routes/main');
//exigindo a rota de pacientes
const PacienteRouter = require('./routes/patients');
//exigindo a rota de hospitais
const HospitaisRouter = require('./routes/hospitais');

//exigindo o arquivo de conexão com banco de dados
const db = require('./database/database');
db.sequelize.sync({force: false});


app.use(parser.json());
app.use(cors());
app.use(parser.urlencoded({extended: false}));


app.use('/', MainRouter);
app.use('/patients', PacienteRouter);
app.use('/hospitais', HospitaisRouter);

//ouvindo a api na porta 4001
app.listen(port, function(){
    console.log('O Servidor está rodando na porta '+ port);
})