import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    custom: {
        border: "none",
        boxShadow: "none"
    },
    avatar: {
        backgroundColor: blue[600],
    },
}));

function CustomCard() {
    const classes = useStyles();

    return (
        <Card className={classes.custom}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>R</Avatar>
                }
                title={<Typography variant="subtitle2" >Kartik Patidar</Typography>}
                subheader={<Typography variant="subtitle2" component="b" color="textSecondary" >Admin Account</Typography>}
                action={
                    <IconButton>
                        <ExpandMore />
                    </IconButton>
                }
            />
        </Card>
    );
}


export default CustomCard;
