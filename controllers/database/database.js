const Sequelize = require('sequelize');
const db = {}

const sequelizeDB = new Sequelize('painelcovid19', 'root', '123456', {
    hostname: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelizeDB;
db.Sequelize = Sequelize;

module.exports = db;

db.pacientes = require('../models/patients')(sequelizeDB, Sequelize);
db.hospitais = require('../models/hospitais')(sequelizeDB, Sequelize);

//expota o modulo db
module.exports = db;
