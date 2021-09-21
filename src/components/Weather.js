import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Weather() {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		/* axios
			 .get('http://api.weatherstack.com/current?access_key=b6b6db5cd4ce35f811638d14df9e5e0a&query=belmont%20ma')
			 .then(response => {
			 console.log('promise fulfilled')
			 setWeather(response.data.current.temperature)
			 }) */
	}, [])

	return (
		<div>
			<h3>Weather</h3>
			<strong>Belmont weather: { JSON.stringify(weather) }</strong>
			<br/>
			<WbSunnyIcon />
		</div>
	)
}

export default Weather
