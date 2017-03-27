var React = require('react');
var Backbone = require('backbone');

var Order = require('../models/shirts').Order;
var OrderCollection = require('../models/shirts').OrderCollection



var CartLayout = React.createClass({
// getInitialState: function(){
//   var orderCollection = new OrderCollection();
//   var self = this;
//   orderCollection.fetch().done(function(){
//     self.setState({orderCollection: orderCollection})
// })
// return {
//   orderCollection: orderCollection
// };
// },
//
//   addToOrder: function(item){
//   this.state.orderCollection.add(item);
//   this.forceUpdate();
//   console.log(item);
// },
//

  render: function(){
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
            <div className="col-md-3"><h4>...</h4></div>
            <div className="col-md-3"><h4>...</h4></div>
            <div className="col-md-3"><h4>...</h4></div>
            <div className="col-md-3"><h4>...</h4></div>
          </div>
        </div>
        <div className="row">
          <div className="well col-md-2">
            <h3>Total</h3>
            <ul>
              <li>amount here</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
);
module.exports = {
  CartLayout
};
