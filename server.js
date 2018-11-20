const express = require('express');
const router = require('./routes');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const config = require('./config');
//const db = require('./db/mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || config.app.port;

// router
app.use('/', router);


app.use(logErrors);
app.use(errorHandler);

app.use(function(err, req, res, next){

    if(err.status != null) {
        var statusCode = err.status;
    }else{
        var statusCode = 500;
    }
    res.status(statusCode).send(err.message);
});


app.listen(port, () => console.log(`Listening on port ${port}`));


function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
