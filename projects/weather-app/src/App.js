import React from 'react';
import Result from './components/Result'
import FormArea from './components/FormArea'
import './App.css'

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  async componentDidMount() {
    // changed this
    let weatherurl = `https://api-proxy-weather.herokuapp.com/api/v1/weather`;
    const api_call = await fetch(weatherurl);
    const response = await api_call.json()

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })

  }


  getWeather = async (event) => {
    const city = event.target.elements.city.value;
    event.preventDefault();
    let weatherurl = "";

    if (city) {
      weatherurl = `https://api-proxy-weather.herokuapp.com/api/v1/weather?city=${city}` ;

    }

    const api_call = await fetch(weatherurl);
    const response = await api_call.json()

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      weather_id : response.weather[0].id,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <div className="weather-card one">
              <div className="top">
                <Result
                  temp={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                />
              </div>
              <i className={`owf owf-${this.state.weather_id} owf-5x`}></i>

              <FormArea
                loadWeather={this.getWeather}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
