import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>

    </div>
  );
}

export default App;
