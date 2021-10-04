import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import millify from "millify";

function CoinPrices() {
	const [coinPrices, setCoinPrices] = useState([]);
	
	useEffect(() => {
		axios
			.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
			.then(response => {
				setCoinPrices(response.data.coins);
				console.log(response.data.coins);
			});
	}, []);
	
	return (
		<div>
			<Typography variant="h1" sx={{ ml:"35%", my: 2 }} >
				Cryptocurrencies
			</Typography>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{coinPrices.map((item) => (
					<Grid item xs={2} sm={4} md={4}>
						<Card elevation={5}>
						<Box sx={{ display: 'flex', "justify-content": "space-between", m: 2 }}>
						  <Box sx={{ display: 'flex' }}>
						    <Avatar src={item.icon}></Avatar>
						    <Typography variant="h4" sx={{ ml: "3%" }}>{item.name}</Typography>
						  </Box>
  					<Typography variant="h4">${millify(item.price, { precision: 2})}</Typography>
						</Box>
						<Box sx= {{ display: 'flex', "flex-direction": "column", m:2 }}>
						<Typography variant="h4">Market Cap: ${ millify(item.marketCap) }</Typography>
						<Typography variant="h4">Price Change: { millify(item.priceChange1d) }%</Typography>
						</Box>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default CoinPrices;
