var Promise = require('bluebird');

function ColecaoController(DbModel) {
  this.DbModel = DbModel;
}

ColecaoController.prototype.getAll = function(request, response, next) {
  console.log("gettingAllCollection");
   this.DbModel.getAll()
    .then((results) => {response.json(JSON.stringify(results));})
    .catch(next);
};

ColecaoController.prototype.getById = function(request, response, next) {
   console.log("gettingCollectionByID: " + request.params._id);
   var _id = request.params._id;
   this.DbModel.getById(_id)
    .then((results) => {response.json(JSON.stringify(results));})
    .catch(next);
};

ColecaoController.prototype.create = function(request, response, next) {
  console.log("creatingCollection: " + request.body);
  this.DbModel.create(request.body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

ColecaoController.prototype.remove = function(request, response, next) {
  console.log("removingCollection: " + request.params._id);
  var _id = request.params._id;
  this.DbModel.remove(_id)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

ColecaoController.prototype.update = function(request, response, next) {
  console.log("updatingCollection: " + request.body);
  var _id = request.params._id,
      body = request.body;
  this.DbModel.update(_id, body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

module.exports = function(ColecaoModelDb) {
  return new ColecaoController(ColecaoModelDb);
};
