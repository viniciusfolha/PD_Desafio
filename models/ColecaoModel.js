var Colecao = function(db){
  this.db = db;
};

Colecao.prototype.getAll = function() {
    return this.db.query('SELECT * FROM Colecoes');
}

Colecao.prototype.getById = function(collectionId) {
    return this.db.query('SELECT * FROM Colecoes WHERE ID = ?',collectionId);
}

Colecao.prototype.create = function(body) {
    return this.db.query('INSERT INTO Colecoes SET ?', body);
}

Colecao.prototype.remove = function(collectionId) {
    return this.db.query('DELETE FROM Colecoes WHERE ID = ?',collectionId);
}

Colecao.prototype.update = function(collectionId, body) {
    var values = [body,collectionId];
    return this.db.query('UPDATE Colecoes SET ? WHERE ID = ?',values);
}

module.exports= function(db){
  return new Colecao(db);
}