import React from 'react'

const Weather =({state}) => {
    if (state.city) {
        return (
            <div className='infoWeath'>
                <p>Местоположение: {state.city}, {state.country}</p>
                <p>Температура: {state.temp}</p>
                <p>Давление: {state.pressure}</p>
                <p>Заход солнца: {state.sunset}</p>
            </div>
        )
    } else {
       return (<p className='error'>{state.error}</p>)
    }
}

export default Weather
