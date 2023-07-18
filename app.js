const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.use(express.json());
app.use(logger('dev'));
app.use(cors());

const indexRouter = require('./routers/index')
const apiRouter = require('./routers/api')
const {connect} = require('./db/db')


app.use('/', indexRouter)
app.use('/api', apiRouter)
connect();


module.exports = app