import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: theme.spacing(3),
        height: '155px',
        width: '310px',
        left: '0px',
        top: '0px',
        borderRadius: '30px',
        // background: 'linear-gradient(134.01deg, #1FF7FD -23.61%, #B33BF6 38.91%, #FF844C 84.15%, #FF844B 103.79%)',
        // background: 'linear-gradient(134.01deg, #1FF7FD 10%, #B33BF6 38.91%, #FF844C 84.15%, #FF844B 103.79%)',
        background: 'linear-gradient(134.01deg, #08AEF5 , #0465EA)',
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '18px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: '#FFFFFF',
    },
    desc: {
        fontFamily: 'Product Sans',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
    }
}));

function HolidayCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <p className={classes.title}>{props.title}</p>
                <p>{props.description}</p>
            </CardContent>
        </Card>

    );
}

export default HolidayCard;