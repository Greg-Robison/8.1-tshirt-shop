var React = require('react');
var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({
urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_tshirt'
});

var ShirtCollection = Backbone.Collection.extend({
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_tshirt',
  model: Shirt
});
var Order = Backbone.Model.extend({
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_tshirt',
  idAttribute: '_id',
  defaults:{
    "name": "",
    "description": "",
    "price": "",
    "size": "",
  }
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_tshirt'

});



module.exports = {
  Shirt,
  ShirtCollection,
  Order,
  OrderCollection
};
