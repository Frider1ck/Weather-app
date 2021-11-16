import React from 'react'

function Form({getWeather}) {
    return (
        <form onSubmit={(e) => getWeather(e)}>
            <input type='text' name='city' placeholder='Город'/>
            <button>Получить данные о погоде</button>            
        </form>
    )
}

export default Form
