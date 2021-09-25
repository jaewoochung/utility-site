import {
	AppBar,
	Box,
	Toolbar
} from '@material-ui/core'

const DashboardNavbar = () => {
	return (
		<AppBar elevation={0}>
			<Toolbar sx={{ bgcolor: '#5664d2' }}>
				<strong>Jaewoo's Utility Dashboard</strong>
				<Box sx={{ flexGrow: 1 }} />
			</Toolbar>
		</AppBar>
	)
}

export default DashboardNavbar
