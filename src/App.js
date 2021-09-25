import * as React from 'react'
import {
	ThemeProvider,
	Box,
	Container,
	Grid
} from '@material-ui/core'
import theme from './theme'
import Weather from './components/Weather'
import DashboardNavbar from './components/DashboardNavbar'
import CoinPrices from './components/CoinPrices'
import NbaSchedule from './components/NbaSchedule'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<DashboardNavbar />
			<Box
				sx={{
					backgroundColor: 'background.default',
					minHeight: '100%',
					py: 12,
				}}
			>
				<Grid container spacing={1}>
					<Grid item xs={12} sx={{ ml:"25%", mr:"25%" }}>
						<Weather />	
					</Grid>
					<Grid item xs={12} sx={{ ml:"15%", mr:"15%" }}>
						<CoinPrices />
					</Grid>
					<Grid item xs={12} sx={{ ml:"15%", mr:"15%" }} >
						<NbaSchedule />
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	)
}

export default App;
