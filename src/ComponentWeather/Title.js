import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  barhead :{
    height:40,
    background: '#3399FF',
    
    
  },
  headtitle :{
    marginLeft :10,
    marginTop : 5,
    
  }
}));

function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.barhead} position="static"  >       
          <Typography variant="h6" color="inherit" className={classes.headtitle}>
            WeatherApp 
          </Typography>        
      </AppBar>
    </div>
  );
}

export default Title;
