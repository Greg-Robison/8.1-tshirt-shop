var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var MainLayout = require('./components/catalog.jsx').MainLayout;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index',
    // "cart": 'checkout'

  },
  index: function(){
    ReactDOM.render(
      React.createElement(MainLayout),
      document.getElementById('app')
    )
  }
});
// checkout: function(){
//   ReactDOM.render(
//     React.createElement(MainLayout),
//     document.getElementById('app')
//   )
// }
var appRouter = new AppRouter();

module.exports = appRouter;
