const mysql = require('mysql');
var Promise = require('bluebird')

Promise.promisifyAll(require('mysql/lib/Connection').prototype)
Promise.promisifyAll(require('mysql/lib/Pool').prototype)

const config = require('../config');

var pool = mysql.createPool(config.db);

var query = function (sqlCommand, params) {
    return Promise.using(getConnection(), (conn)=>{
        return conn.queryAsync(sqlCommand,params);
    });

}



var getConnection = function(){
    return pool.getConnectionAsync().disposer((conn)=>{
    	conn.release();
    });
}

module.exports = {
    query: query
}