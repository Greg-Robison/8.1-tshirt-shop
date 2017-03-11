var React = require('react');
var Backbone = require('backbone');

var Shirt = require('../models/shirts').Shirt;
var ShirtCollection = require('../models/shirts').ShirtCollection

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
                price: 3999,
                description: "Cool Pink Floyd T-Shirt"
            }, {
                image: "./images/star-wars.jpg",
                name: "star-wars",
                price: 3999,
                description: "Awesome Star Wars T-Shirt"
            }, {
                image: "./images/crush.jpg",
                name: "orange-crush",
                price: 6499,
                description: "Orange Crush T-Shirt"
            }, {
                image: "./images/rush.jpg",
                name: "Rush",
                price: 6499,
                description: "Rush 2112 Concert T-Shirt"
            }, {
                image: "./images/journey.jpg",
                name: "Journey",
                price: 6499,
                description: "Journey Concert T-Shirt"
            }, {
                image: "./images/led-zeppelin.jpeg",
                name: "Led Zeppelin",
                price: 6499,
                description: "Led Zeppelin Concert T-Shirt"
            },
        ]);
        this.setState({shirtCollection: newShirtCollection});
        console.log('here is state', this.state);
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
                                    <a href="#">Cart</a>
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

    render: function() {
      var tshirts = this.props.shirtCollection.map(function(tshirt) {
          return (
            <div key={tshirt.cid} className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={tshirt.get('image')} alt="..."/>
                    <div className="caption">
                        <h3>{tshirt.get('description')}</h3>
                        <p>{tshirt.get('price')}</p>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Size
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a href="#">Medium</a>
                                </li>
                                <li>
                                    <a href="#">Large</a>
                                </li>
                                <li>
                                    <a href="#">Extra Large</a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="btn btn-primary" role="button">Add To Cart</a>
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
    MainLayout
}
