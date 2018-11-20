var Promise = require('bluebird');

function DiscoController(DbModel) {
  this.DbModel = DbModel;
}

DiscoController.prototype.getAll = function(request, response, next) {
  console.log("gettingAllDisc");
   this.DbModel.getAll()
    .then((results) => {response.json(JSON.stringify(results));})
    .catch(next);
};

DiscoController.prototype.getAllByCollection = function(request, response, next) {
  console.log("gettingAllDiscByCollection" + request.params._id);
   var _id = request.params._id;
   this.DbModel.getAllByCollection(_id)
    .then((results) => {response.json(JSON.stringify(results));})
    .catch(next);
};

DiscoController.prototype.getById = function(request, response, next) {
    console.log("gettingDiscById:" + request.params._id);
   var _id = request.params._id;
   this.DbModel.getById(_id)
    .then((results) => {response.json(JSON.stringify(results));})
    .catch(next);
};

DiscoController.prototype.create = function(request, response, next) {
  console.log("creatingDisc " + request.body);
  this.DbModel.create(request.body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

DiscoController.prototype.remove = function(request, response, next) {
  console.log("removingDisc " + request.params);
  var _id = request.params._id;
  this.DbModel.remove(_id)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

DiscoController.prototype.update = function(request, response, next) {
  console.log("updatingDisc " + request.params);
  var _id = request.params._id,
      body = request.body;
      console.log(_id);
       console.log(body);
  this.DbModel.update(_id, body)
    .then(function(err, data) {
      response.json(data);
    })
    .catch(next);
};

module.exports = function(DiscoModelDb) {
  return new DiscoController(DiscoModelDb);
};
