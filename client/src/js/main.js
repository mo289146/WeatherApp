var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/weather');
var BaseComponent = React.createClass({

  render : function(){
    return(
      <div>
      <Weather />
      </div>
    );
  }
});


ReactDOM.render(<BaseComponent/>,document.getElementById('app'));
