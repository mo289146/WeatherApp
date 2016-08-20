var React=require("react")
var {render} =  require('react-dom');
var WeatherComponents = require('./weatherComponents');
var dataCame =false;
var Weather = React.createClass({
  getInitialState: function(){
    return({data : {}});
  },

  handleButtonClick : function(){
    var city = this.refs.searchcity.value;
    console.log(city);
    var cityInfoObj ={};
    $ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=95dba75bf2fc3f444c1839aad8469cf8',
      dataType: 'json',
      type: 'GET',
      async: false,
      success : function(data){
        console.log("success");
        cityInfoObj.lat = data.coord.lat;
        cityInfoObj.lon = data.coord.lon;
        cityInfoObj.humidity = data.main.humidity;
        cityInfoObj.description = data.weather[0].description;
        cityInfoObj.sunrise = data.sys.sunrise;
        cityInfoObj.sunset = data.sys.sunset;
        cityInfoObj.pressure = data.main.pressure;
        cityInfoObj.speed = data.wind.speed;
        cityInfoObj.deg = data.wind.deg;
        cityInfoObj.name = data.name;
        dataCame = true;
      },
      error : function(err){
        console.log("inside error");
      }
    }
  );
  console.log(cityInfoObj);
  this.setState({ data : cityInfoObj});
},
render:function(){
  var loadInfo = '';
  if(dataCame){
    loadInfo =<WeatherComponents data = {this.state.data}/>;
  }
  return(<div>
  <input type = "text" ref="searchcity" placeholder = "Search for cities 1" />
<button class = "btn btn-warning" onClick={this.handleButtonClick}>Add</button>
{loadInfo}
</div>);
}
});

module.exports = Weather;
