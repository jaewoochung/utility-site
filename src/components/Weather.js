import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Typography, Box } from '@material-ui/core'

function Weather() {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		axios
			.get('http://api.weatherstack.com/current?access_key=b6b6db5cd4ce35f811638d14df9e5e0a&query=belmont%20ma')
			.then(response => {
				setWeather(response.data.current)
			})
	}, [])

	return (
		<div>
			<Card>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Belmont, MA
					</Typography>
					<Box sx={{ display: 'flex'}}>
						<Avatar src={weather.weather_icons}></Avatar>
						<Typography variant="h3" component="div" sx={{ ml: 2}}>
							{ weather.temperature }°c
						</Typography>
					</Box>
					<Typography variant="body2" color="text.secondary">
						{ weather.weather_descriptions }
					</Typography>
					<Box sx={{ display: 'flex', mt: 1}}>
						<Typography variant="body2" component="div">
							UV Index: { weather.uv_index }
						</Typography>
						<Typography variant="body2" component="div" sx={{ ml: 2}}>
							Humidty: { weather.humidity }%
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</div>
	)
}

export default Weather
