import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import millify from "millify";
import moment from "moment";

function CryptoNews() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios
		/* 			.get('https://bing-news-search1.p.rapidapi.com/news', { */
			.get('https://bing-news-search1.p.rapidapi.com/news/search?q="nba"&textFormat=Raw&safeSearch=Off', {
					headers: {
						'x-bingapis-sdk': 'true',
						'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
						'x-rapidapi-key': 'dc6d25fefdmshff9ae0aa1052398p1dc5a4jsnbfce12e32326'
					}
			})
			.then(response => {
				setNews(response.data.value);
				console.log(response.data.value);
			});
	}, []);
	
	return (
		<div>
			<Box sx={{ display: 'flex' }}>
				<Typography variant="h1" sx={{ my: 2 }}>News</Typography>
			</Box>
			<Grid container rowSpacing={1} columnSpacing={{ xs:1, sm: 2, md: 3 }}>
				{news.map((item) => (
					<Grid item xs={6}>
						<Card elevation={5}>
						
						<Box sx={{ display: 'flex', m:2 }}>
  					<img src={item?.image?.thumbnail?.contentUrl} />
						<a href={item.url} target="_blank" rel="noreferrer">
  	  			<Typography variant="h3" sx={{ ml: "3%" }}>{item.name}</Typography>
						</a>
						</Box>
						<Box sx={{ display: 'flex', m:2 }}>
						  <Typography variant="h5">{item.description}</Typography>
						</Box>
						<Box sx={{ display: 'flex', m:2 }}>
						<Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl}></Avatar>
						<Typography variant="p" sx={{ ml:"1.5%" }}>{moment(item.datePublished).startOf('ss').fromNow()}</Typography>
						</Box>
						</Card>
					</Grid>
				))}
		  </Grid>
		</div>
	)
}

export default CryptoNews
