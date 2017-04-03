var React = require('react');
var Backbone = require('backbone');

var Order = require('../models/shirts').Order;
var OrderCollection = require('../models/shirts').OrderCollection;

// var MainLayout = require('./components/catalog.jsx').Mainlayout;

var CartLayout = React.createClass({
  getInitialState: function(){
    // set cart to an empty array
    // even if an array is empty, you can map over it
    var cart = [];
    var total = 0;
    // grab cart (if it exists) from localStorage and update cart value
    if(localStorage.getItem('cart')){
      // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
      cart = JSON.parse(localStorage.getItem('cart'));
      // put total method here
      total = cart.reduce(function(accum, i){
        return accum + i.price;
      }, 0);
    }

    // return cart
    return {
      cart: cart,
      total: total
    };
  },

  render: function(){
      var cartItems = this.state.cart.map(function(item, index){
        // there are two ways to get data out of an object
        // dot notation; item.key
        // bracket notation; item[key]
        console.log('item', item);
        return (
          <div key={ index }>
            <div className="col-md-3"><h4>{ item.name }</h4></div>
            <div className="col-md-3"><h4>{ item.description }</h4></div>
            <div className="col-md-3"><h4>{ item.price }</h4></div>
            <div className="col-md-3"><h4>{ item.size }</h4></div>
          </div>
        )
      })
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="well col-md-12">
            <div className="col-md-3"><h3>Name</h3></div>
            <div className="col-md-3"><h3>Description</h3></div>
            <div className="col-md-3"><h3>Price</h3></div>
            <div className="col-md-3"><h3>Size</h3></div>
          </div>
          <div className="well col-md-12">
            { cartItems }
          </div>
        </div>
        <div className="row">
          <div className="well col-md-2">
            <h3>Total</h3>
            <ul>
              <li>{this.state.total}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  CartLayout
};
