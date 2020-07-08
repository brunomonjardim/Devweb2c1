const express = require('express');
const pacientes = express.Router();
const cors = require('cors');
const CriarTablePaciente = require('../models/patients');
const pacientesController = require('../controllers/patientController');

pacientes.use(cors());

//SELECIONAR PACIENTE POR  ID OU TODOS
pacientes.get('/:id?', (req, res) => {
    if(req.params.id){
        pacientesController.selecionarPacienteID(req, res);
    }else{
        pacientesController.selecionarPacientes(req, res);
    }
});

//CADASTRAR CLIENTE
pacientes.post('/', (req, res) => {
    console.log(req);
    pacientesController.cadastrarPaciente(req, res);
});

//ATUALIZAR PACIENTE
pacientes.put('/:id', (req, res) => {
    pacientesController.atualizarPaciente(req, res);
});

//DELETAR PACIENTE
pacientes.delete('/:id?', (req, res) => {
    if(req.params.id){
        pacientesController.deletarPaciente(req, res);
    }else{
        pacientesController.deletarTodosPacientes(req, res);
    }
});

//exportar o modulo de pacientes
module.exports = pacientes;