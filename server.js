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

/*
app.get('/api/discos', (req, res, next) => {
	db.query('SELECT * FROM Discos')
        .then((results) => {console.log(results); res.json(JSON.stringify(results));})
        .catch((err) => {console.log(err);res.json(error)});
	//res.send({ express: 'Hello From Express' });
});

app.get('/api/colecoes', (req, res, next) => {
  execSQLQuery('SELECT * FROM Colecoes', res);
});
*/
app.use(function(err, req, res, next){

    if(err.status != null) {
        var statusCode = err.status;
    }else{
        var statusCode = 500;
    }
    res.status(statusCode).send(err.message);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
/*
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection(config.db);
  var  connectionPromise = Bluebird.promisifyAll(connection);
  connectionPromise.queryAsync(sqlQry)
    .then(function(res){
        res.json(JSON.stringify(results));
    })
    .catch((err) => {
        res.json(error);
    })
    .then((result)=> {
        console.log(results);
        connection.end();
    });

};


  function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection(config.db);
  
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(JSON.stringify(results));
      console.log(results);
      connection.end();
  });
  */
