import React from 'react';
// import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    // margin: '30px 100px',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'centre',
    // alignItems: 'centre',
    marginLeft: '200px',
    marginTop: '35px',
    width: '100%',
    color: '#22e9ec',
    background: 'transparent',
    // fontSize: '45px',
    // objectFit: 'contain',
    // border: '2px solid white',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center', // Center align the text
    color: '#23cedd', // Set the text color
    alignContent: 'centre',
  },
  image: {
    marginRight: '15px',
    marginBottom: 'none',
    float: 'right',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  homoPageLogo: {
    float: 'right',
    width: '150px',
    height: '150px',
    marginRight: '20px',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <AppBar className={classes.appBar} position="static">
        <Typography variant="h4">
        Elevate Your Conversations with
        <br />
        Seamless Video Calling Excellence.
        </Typography>
      </AppBar> */}
      {/* <div className={classes.wrapper}>
        <VideoPlayer />
        <Sidebar align="left">
          <Notifications />
        </Sidebar>
      </div> */}
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <VideoPlayer />
        </div>
        <div className="column">
          <Sidebar align="left">
            <Notifications />
          </Sidebar>
        </div>
      </div>
      {/* <div flexDirection="column">
      </div> */}
    </div>
  );
};

export default App;
