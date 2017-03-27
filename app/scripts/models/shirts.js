var React = require('react');
var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({
  name: "",
  price: "",
  description: "",
  image: ""
});

var ShirtCollection = Backbone.Collection.extend({
  model: Shirt
});
var Order = Backbone.Model.extend({
    name: "",
    description: "",
    price: "",
    size: "",
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
