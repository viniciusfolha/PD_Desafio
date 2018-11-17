var Disco = function(db){
  this.db = db;
};

Disco.prototype.getAll = function() {
    return this.db.query('SELECT * FROM Discos');
}

Disco.prototype.getAllByCollection = function(collectionId) {
    return this.db.query('SELECT * FROM Discos WHERE ColecaoID = ?',collectionId);
}

Disco.prototype.getById = function(discId) {
    return this.db.query('SELECT * FROM Discos WHERE ID = ?',discId);
}

Disco.prototype.create = function(body) {
    return this.db.query('INSERT INTO Discos SET ?', body);
}

Disco.prototype.remove = function(discId) {
    return this.db.query('DELETE FROM Discos WHERE ID = ?',discId);
}

Disco.prototype.update = function(discId, body) {
    var values = [body,discId];
    return this.db.query('UPDATE Discos SET ? WHERE ID = ?',values);
}

module.exports= function(db){
  return new Disco(db);
}