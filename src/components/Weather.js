import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Typography, Box } from '@material-ui/core'

function Weather() {
	const [weather, setWeather] = useState([])
	const [condition, setCondition] = useState([])
	
	useEffect(() => {
		axios
			.get('https://api.weatherapi.com/v1/current.json?key=1fb6df188b0143648c5223702212409&q=belmont ma&aqi=yes')
			.then(response => {
				setWeather(response.data.current)
				setCondition(response.data.current.condition)
			})
	}, [])

	return (
		<div>
			<Typography variant="h1" sx={{ ml:"35%" }} >
				Local Weather
			</Typography>
			<Card elevation={3} sx={{ pl: "35%"}}>
				<CardContent sx={{ justifyContent: "center" }}>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Belmont, MA
					</Typography>
					<Box sx={{ display: 'flex'}}>
						<Avatar src={condition.icon}></Avatar>
						<Typography variant="h3" component="div" sx={{ ml: 2}}>
							{ weather.temp_c }°c
						</Typography>
					</Box>
					<Typography variant="body2" color="text.secondary">
						 { condition.text }
					</Typography>
					<Box sx={{ display: 'flex', mt: 1}}>
						<Typography variant="body2" component="div">
							Wind MPH: { weather.wind_mph }
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

/* 

 */
