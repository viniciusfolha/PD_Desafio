const config = {
 app: {
   port: 5000
 },
 db: {
   host: 'localhost',
   user: 'novousuario',
   password : 'password',
   database : 'catalogo',
   connectionLimit: 10,
 }
};

module.exports = config;