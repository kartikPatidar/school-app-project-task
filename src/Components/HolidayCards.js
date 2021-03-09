import { IconButton, makeStyles } from "@material-ui/core";
import HolidayCard from "./HolidayCard";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from "react";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    chevron: {
        border: '1.5px solid black',
        borderRadius: '100px',
        height: '50px',
    }
}));

function HolidayCards() {
    const classes = useStyles();
    const [startIndex, setStartIndex] = useState(0);
    function handelChevronIconClick() {
        setStartIndex(startIndex + 1);
    }

    const cardsArray = [
        { id: 'dgdffg', title: 'Holi Holiday', desc: 'Activate every muscle group to get the results you’ve always wanted.' },
        { id: 'dffoio', title: 'Another Holiday', desc: 'Activate every muscle group to get the results you’ve always wanted.' },
        { id: 'kljksd', title: 'new Holiday', desc: 'Activate every muscle group to get the results you’ve always wanted.' },
        { id: 'ytgeej', title: 'Diwali Holiday', desc: 'Activate every muscle group to get the results you’ve always wanted.' },
        { id: 'rterza', title: 'HAG Holiday', desc: 'Just happy muscle group to get the results you’ve always wanted.' },
    ];

    const first = startIndex % (cardsArray.length);
    const second = (first + 1) % (cardsArray.length);
    const third = (second + 1) % (cardsArray.length);

    const cards = [
        <HolidayCard title={cardsArray[first].title} description={cardsArray[first].desc} key={cardsArray[first].id} />,
        <HolidayCard title={cardsArray[second].title} description={cardsArray[second].desc} key={cardsArray[second].id} />,
        <HolidayCard title={cardsArray[third].title} description={cardsArray[third].desc} key={cardsArray[third].id} />
    ];


    return (
        <div className={classes.root}>
            {cards}
            <IconButton className={classes.chevron} onClick={handelChevronIconClick.bind(this)}>
                <ChevronRightIcon />
            </IconButton>
        </div>
    );
}

export default HolidayCards;