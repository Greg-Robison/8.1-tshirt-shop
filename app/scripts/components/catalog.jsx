// required jquery for bootstrap-sass
var $ = window.$ = window.jQuery = require('jquery');
var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Backbone = require('backbone');

var Shirt = require('../models/shirts').Shirt;
var ShirtCollection = require('../models/shirts').ShirtCollection
var Order = require('../models/shirts').Order;
var OrderCollection = require('../models/shirts').OrderCollection

// require bootstrap-sass for dropdown menu to work
require('bootstrap-sass');

var MainLayout = React.createClass({
    getInitialState: function() {
        var shirtCollection = new ShirtCollection();
        return {shirtCollection: shirtCollection}
    },

    componentWillMount: function() {
        var newShirtCollection = this.state.shirtCollection;
        newShirtCollection.add([
            {
                image: "./images/pink-floyd.jpg",
                name: "pink-floyd",
                price: 39.99,
                description: "Cool Pink Floyd T-Shirt"
            }, {
                image: "./images/star-wars.jpg",
                name: "star-wars",
                price: 39.99,
                description: "Awesome Star Wars T-Shirt"
            }, {
                image: "./images/crush.jpg",
                name: "orange-crush",
                price: 64.99,
                description: "Orange Crush T-Shirt"
            }, {
                image: "./images/rush.jpg",
                name: "Rush",
                price: 64.99,
                description: "Rush 2112 Concert T-Shirt"
            }, {
                image: "./images/journey.jpg",
                name: "Journey",
                price: 64.99,
                description: "Journey Concert T-Shirt"
            }, {
                image: "./images/led-zeppelin.jpeg",
                name: "Led Zeppelin",
                price: 64.99,
                description: "Led Zeppelin Concert T-Shirt"
            },
        ]);
        this.setState({shirtCollection: newShirtCollection});

    },

    render: function() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Greg's Retro T-Shirts</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#">T-Shirts
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#cart/">Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <div className="row">

                    <Tshirt shirtCollection={this.state.shirtCollection}/>
                </div>
            </div>
        )
    }
});

var Tshirt = React.createClass({
  getInitialState: function(){
    var orderCollection = new OrderCollection();
    var self = this;
    orderCollection.fetch().done(function(){
      self.setState({orderCollection: orderCollection})
      console.log('here', orderCollection);
  });
  return {
    orderCollection: orderCollection
  };
  },

    addToOrder: function(e, tshirt){
      e.preventDefault();

      // Return a shallow copy of the model's attributes
      var item = tshirt.toJSON();

      if(localStorage.getItem('cart')){
        console.log('cart exists');
        // parse localStorage (so you can get what was already added to the cart)
        var cart = JSON.parse(localStorage.getItem('cart'));

        // add t-shirt
        cart.push(tshirt);

        // stringify cart
        cart = JSON.stringify(cart);

        // set localStorage
        localStorage.setItem('cart', cart);
      } else {
        console.log('cart does not exist');
        // creat an empty array
        var cart = [];

        // add t-shirt to array
        // The push() method adds new items to the end of an array
        cart.push(tshirt);

        // stringify cart
        // The JSON.stringify() method converts a JavaScript value to a JSON string
        cart = JSON.stringify(cart);

        // set localStorage
        localStorage.setItem('cart', cart)
      }


      // var collection = this.state.orderCollection;
      // collection.add(tshirt);
      // console.log('collection', collection);
      //
      // // set localStorage here
      // localStorage.setItem('cart', collection);
  },
  //method to select a size
    selectSize: function(e, tshirt) {
      e.preventDefault();
      // target the text value of the dropdown
      var size = e.target.text;
      tshirt.set({size: size})

    },

    render: function() {
      var self = this;

      var tshirts = this.props.shirtCollection.map(function(tshirt) {
          return (
            <div key={tshirt.cid} className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={tshirt.get('image')} alt="..."/>
                    <div className="caption">
                        <h3>{tshirt.get('description')}</h3>
                        <p>{tshirt.get('price')}</p>
                        <div className="btn-group">
                            <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Size<span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a onClick={(e)=>self.selectSize(e, tshirt)}>Medium</a>
                                </li>
                                <li>
                                    <a onClick={(e)=>self.selectSize(e, tshirt)}>Large</a>
                                </li>
                                <li>
                                    <a onClick={(e)=>self.selectSize(e, tshirt)}>Extra Large</a>
                                </li>
                            </ul>
                        </div>
                        <a onClick={(e)=>self.addToOrder(e, tshirt)} href="#" className="btn btn-primary" role="button">Add To Cart</a>
                    </div>
                </div>
            </div>
        )
    })
    return(
      <div>{tshirts}</div>
    )
  }
});

module.exports = {
    MainLayout,
    Tshirt
}
