import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Typography, Box, Grid } from '@material-ui/core';

function Weather() {
	const [weather, setWeather] = useState([]);
	const [condition, setCondition] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://api.weatherapi.com/v1/current.json?key=1fb6df188b0143648c5223702212409&q=belmont ma&aqi=yes')
			.then(response => {
				setWeather(response.data.current);
				setCondition(response.data.current.condition);
				console.log(response.data.current);
			});
	}, []);

	return (
		<div>
			<Typography variant="h1">
				Local Weather
			</Typography>
			<Grid container spacing={1} columns={12}>
				<Grid item xs={12}>
					<Card elevation={5}>
						<Box sx={{ display:'flex', "justify-content":"space-between", m:2}}>
							<Box>
								<Typography variant="h2">Belmont, MA</Typography>
								<Box sx={{ display:'flex' }}>
									<Avatar src={condition.icon}></Avatar>
									<Typography variant="h5" color="text.secondary" sx={{ ml:1, mt:1}}>
										{ condition.text }
									</Typography>	
								</Box>
							</Box>
							<Typography variant="h3" component="div" sx={{ mt: 2}}>
								Temperature: { weather.temp_f }°c
							</Typography>
							<Box>
								<Typography variant="h3" component="div" sx={{ mt: 2}}>
									Wind MPH: { weather.wind_mph }
								</Typography>
								<Typography variant="h3" component="div" sx={{ mt: 2}}>
									Wind Direction: { weather.wind_dir }
								</Typography>
							</Box>
							<Typography variant="h3" component="div" sx={{ mt: 2}}>
								Humidty: { weather.humidity }%
							</Typography>
						</Box>
					</Card>
			  </Grid>
			</Grid>
		</div>
	);
}

export default Weather;

/* 

 */
