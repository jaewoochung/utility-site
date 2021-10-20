import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const getDate1 = () => {
	// calculate date
	var utcTime = new Date();
		var today = utcTime.toLocaleString('en-US', { timeZone: 'US/Eastern' }).split(',');
		today = today[0].split('/');

		var dayOfMonth = today[1]
		if (dayOfMonth < 10) {
			dayOfMonth = "0" + dayOfMonth;
		}
		var month = today[0];
		var year = today[2];
		const date = year + "-" + month + "-" + dayOfMonth;
		
		return date
}

const getDate2 = () => {
	var utcTime = new Date();
	var today = utcTime.toLocaleString('en-US', { timeZone: 'US/Eastern' }).split(',');
	today = today[0].split('/');
	
	var dayOfMonth = (+today[1]) + 1
	if (dayOfMonth < 10) {
		dayOfMonth = "0" + dayOfMonth;
	}
	var month = today[0];
	var year = today[2];
	const date = year + "-" + month + "-" + dayOfMonth;
	
	return date
}

function NbaSchedule() {
	const [nbaGames, setGames] = useState([]);
	const time = require('unix-timestamp-converter');
	
	const TableHeader = withStyles(theme => ({
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
		const date1 = getDate1();
		
		axios
			.get("https://v1.basketball.api-sports.io/games?date="+date1+"&league=12&season=2021-2022&timezone=America/New_York", {
				"headers": {
					"x-rapidapi-host": "v1.basketball.api-sports.io",
					"x-rapidapi-key": "9d9a715447e2a3dbbeebac5d5297ce60"
				}
			})
			.then(response => {
				console.log(response.data.response);
				setGames(nbaGames.concat(response.data.response))
			});
	}, []);

	return (
		<div>
			<Typography variant="h1">
				NBA Schedule
			</Typography>
			<TableContainer component={Paper} elevation={4}>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderCell>Date</TableHeaderCell>
							<TableHeaderCell>Away Team</TableHeaderCell>
							<TableHeaderCell>Away Points</TableHeaderCell>
							<TableHeaderCell>Home Points</TableHeaderCell>
							<TableHeaderCell>Home Team</TableHeaderCell>
			        <TableHeaderCell>Time</TableHeaderCell>
        			<TableHeaderCell>Status</TableHeaderCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						{nbaGames.map((gameItem) => (
							<TableRow key={gameItem.id}>
								<TableCell>
									<Typography>{time.UNIX_CODE(gameItem.timestamp)}</Typography>
								</TableCell>
								<TableCell>
									<Box
										sx={{
											alignItems: 'center',
											display: 'flex'
										}}
									>
										<Avatar src={gameItem.teams.away.logo} sx={{ mr: 2 }}>
											{gameItem.teams.away.name}
										</Avatar>
										<Typography>
											{gameItem.teams.away.name}
										</Typography>
									</Box>
								</TableCell>
								<TableCell>
									<Typography> {(gameItem.scores.away.total === null) ? 0 : gameItem.scores.away.total }</Typography>
								</TableCell>
								<TableCell>
									<Typography>
										{(gameItem.scores.home.total === null) ? 0 : gameItem.scores.home.total }
									</Typography>
								</TableCell>
								<TableCell>
									<Box
										sx={{
											alignItems: 'center',
											display: 'flex'
										}}
									>
										<Avatar src={gameItem.teams.home.logo} sx={{ mr: 2 }}>
											{gameItem.teams.home.name}
										</Avatar>
										<Typography>
											{gameItem.teams.home.name}
										</Typography>
									</Box>
								</TableCell>
								<TableCell>{gameItem.time}</TableCell>
								<TableCell>{gameItem.status.long}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>	
	)
}

export default NbaSchedule
