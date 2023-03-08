import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherData = ({ city }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([])

    console.log(api_key)
    console.log(city)
    useEffect(() => {
        axios
            .get(
                `http://api.weatherstack.com/current
                ? access_key=${api_key}
                & query=${city}`
            )
            .then((response) => {
                setWeather(response.data)//.current al agregarlo ya no se ve pero intenta usar la api
                console.log(response)
            })
        return () => setWeather({})
    }, [city])

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>
                <b>temperature:</b> {weather.temperature} Celsius
                
            </p>
            <img src={weather.weather_icons} alt={`${city} weather icon`} width="64" height="64"/>
            <p>
                <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
            </p>
        </div>
    )
}
/*


*/
export default WeatherData