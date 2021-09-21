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
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Weather />	
					</Grid>
					<Grid item xs={6}>
						<CoinPrices />
					</Grid>
				</Grid>
				{/* <Container>
						
						</Container> */}
			</Box>
		</ThemeProvider>
	)
}

export default App;
