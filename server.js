const express = require('express');
const mysql = require('mysql');
const config = require('./config');

const app = express();
const port = process.env.PORT || config.app.port;

app.get('/api/discos', (req, res) => {
	execSQLQuery('SELECT * FROM Discos', res);
	//res.send({ express: 'Hello From Express' });
});

app.get('/api/colecoes', (req, res) => {
  execSQLQuery('SELECT * FROM Colecoes', res);
  //res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

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
}