import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

import CustomDrawer from './CustomDrawer';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/SearchOutlined';


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		color: '#2b2b2a',
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		background: 'white',
		border: 'none',
		boxShadow: 'none',
		padding: '25px 0px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		color: '#2b2b2b',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.black, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#2b2b2a',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		color: '#2b2b2a',
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '25ch',
		},
	},
	notification: {
		fontSize: '35px',
		color: '#2b2b2a',
		display: 'flex',
		marginLeft: theme.spacing(4),
		boxShadow: '0px 0px 30px 1px #d4d1cb',
		borderRadius: '20px',
		padding: '4px 4px',
		cursor: 'pointer',
	},
}));

function ResponsiveDrawer() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon className={classes.menuIcon} />
					</IconButton>
					<Typography className={classes.title} variant="h6" >
						Fri, 28 March
						<Typography className={classes.title} variant="h4" component="b" noWrap>
							Good Morning, Sir
          				</Typography>

					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<NotificationsNoneOutlinedIcon className={classes.notification} />
				</Toolbar>
			</AppBar>
			<CustomDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
		</div>
	);
}

export default ResponsiveDrawer;
