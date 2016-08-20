var React = require('react');
var {render} = require('react-dom');
var WeatherComponents = React.createClass({
  componentDidMount : function(){
    console.log(this.props.data);
    var saveDetail = this.props.data;

  },
    render : function(){
        var d =new Date(this.props.data.sunrise);
        var d2 = new Date(this.props.data.sunset);
        return(<div><table><tr><th>Name</th><th>Value</th></tr>
          <tr><td>Wind</td><td>{this.props.data.speed}m/s</td></tr>
          <tr><td>Cloudiness</td><td>{this.props.data.description}</td></tr>
          <tr><td>Pressure</td><td>{this.props.data.pressure}hpa</td></tr>
          <tr><td>Humidity</td><td>{this.props.data.humidity}%</td></tr>
          <tr><td>Sunrise</td><td>{d.getHours()+' '+d.getMinutes()}</td></tr>
          <tr><td>Sunset</td><td>{d2.getHours()+' '+d.getMinutes()}</td></tr>
          <tr><td>GeoCords</td><td>[{this.props.data.lat},{this.props.data.lon}]</td></tr>
          </table></div>);
    }
  });

  module.exports = WeatherComponents;
