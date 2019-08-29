const express = require('express');
const path = require('path')
const bodyParser = require('body-parser'); //Input HTML
const app = express();
const cors = require('cors')

//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/views'));

//
app.use(cors())
app.use('/api/franquia', require('./src/controller/FranquiaController'));
app.use('/api/cnc', require('./src/controller/NaoConformidadeController'));
app.use('/api/motivo', require('./src/controller/MotivoController'));
app.use('/api/submotivo', require('./src/controller/SubmotivoController'));
app.use('/api/setor', require('./src/controller/SetorController'));
app.use('/api/setorMembro', require('./src/controller/SetorMembroController'));



app.listen('3001');
