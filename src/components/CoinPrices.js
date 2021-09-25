import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { Avatar, Typography, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

function CoinPrices() {
	const [coinPrices, setCoinPrices] = useState([])

	const TableHeadCoin = withStyles(theme => ({
		root: {
			backgroundColor: '#778899'
		}
	}))(TableHead);

	const TableHeaderCell = withStyles(theme => ({
		root: {
			color: 'white'
		}
	}))(TableCell);
	
	useEffect(() => {
		axios
			.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=5')
			.then(response => {
				setCoinPrices(response.data.coins)
				console.log(response.data.coins)
			})
	}, [])
	
	return (
		<div>
			<Typography variant="h1">
				Top 5 Cryptocurrencies in the world
			</Typography>
			<TableContainer component={Paper} elevation={3}>
				<Table>
					<TableHeadCoin>
						<TableRow>
							<TableHeaderCell>
								<Typography>
									Coin Name
								</Typography>
							</TableHeaderCell>
							<TableHeaderCell>
								<Typography>
									Coin Prices
								</Typography>
							</TableHeaderCell>
						</TableRow>
					</TableHeadCoin>
					<TableBody>
						{coinPrices.map((item) => (
							<TableRow>
								<TableCell>
									{item.name}
								</TableCell>
								<TableCell>
									${item.price.toFixed(2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default CoinPrices
