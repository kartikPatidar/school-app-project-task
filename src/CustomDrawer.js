import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import schoolLogo from './Images/schoolLogo.jpg';
import CustomCard from './CustomCard';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    logo: {
        marginTop: '20px',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();


    const drawerLinksList = ['Home', 'Notice Board', 'Attendence', 'Fees Details', 'Calander', 'Multimedia', 'Timetable', 'Schedules', 'Support Requests', 'Account'];
    const drawerIconList = [<HomeOutlinedIcon />, <DeveloperBoardOutlinedIcon />, <EventAvailableOutlinedIcon />, <AssignmentOutlinedIcon />, <DateRangeOutlinedIcon />,
    <PermMediaOutlinedIcon />, <DashboardOutlinedIcon />, <LibraryBooksOutlinedIcon />, <SupervisorAccountOutlinedIcon />, <AccountCircleOutlinedIcon />]
    const drawer = (
        <div>
            <div className={classes.logo} ><center><img src={schoolLogo} alt="" height="100px" /></center></div>
            <List>
                {drawerLinksList.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {drawerIconList[index]}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <CustomCard />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}

export default ResponsiveDrawer;
