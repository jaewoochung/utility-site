import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import { Avatar, Grid, Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import millify from "millify"

function CoinPrices() {
	const [coinPrices, setCoinPrices] = useState([])
	
	useEffect(() => {
		axios
			.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
			.then(response => {
				setCoinPrices(response.data.coins)
				console.log(response.data.coins)
			})
	}, [])
	
	return (
		<div>
			<Typography variant="h1" sx={{ ml:"35%", my: 2 }} >
				Top 10 Cryptocurrencies
			</Typography>
			<Grid container spacing={2}>
				{coinPrices.map((item) => (
					<Card elevation={3} xs={4} sx={{ m:1.5 }}>
						<Box sx={{ display: 'flex', m:1.25 }}>
							<Avatar src={item.icon}></Avatar>
							<Typography variant="h4">{item.name}</Typography>	
						</Box>
						<Box sx={{ display: 'block'}}>
							<CardContent>
								<Typography variant="p">Price: {millify(item.price)}</Typography>	
							</CardContent>
							<CardContent>
								<Typography variant="p">Market Cap: {millify(item.marketCap)}</Typography>	
							</CardContent>
							<CardContent>
								<Typography variant="p">Daily Change: {millify(item.priceChange1d)}%</Typography>		
							</CardContent>
						</Box>
					</Card>
				))}
			</Grid>
		</div>
	)
}

export default CoinPrices
