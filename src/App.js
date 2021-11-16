import React from 'react'

import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Weather from './components/Weather';

function App() {
  const [state, setState] = React.useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  });

  const API_KEY = '2bc398408c09e0d2a2d74c0a6141f776';
  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(data => { return data.json()})

      const sunset = data.sys.sunset;
      const ddata = new Date();
      ddata.setTime(sunset);
      const sunset_date = ddata.getHours() + ':' + ddata.getMinutes() + ':' + ddata.getSeconds();

      setState({
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: '',
        temp: data.main.temp,
      })
    } else {
      setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите название города'
      })
    }
    
  }
  return (
    <div className='main'>
      <div className="wrapper">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5 info'>
            <Info/>
          </div>
          <div className='col-sm-7 form'>
          <Form getWeather={getWeather}/>
          <Weather state={state}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
