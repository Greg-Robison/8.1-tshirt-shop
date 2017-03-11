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

module.exports = {
  Shirt,
  ShirtCollection
};
