import { AppBar, Typography } from '@material-ui/core'

import Notifications from './components/Notifications';
import Options from './components/Options';
import React from 'react'
import VideoPlayer from './components/VideoPlayer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =makeStyles((theme)=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));

const App = () => {
    const classes=useStyles();
  return (
    <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography variant='h2' align='center'>Görüntülü Sohbet</Typography>    
        </AppBar>
        <VideoPlayer/>
        <Options>
            <Notifications/>
        </Options>
    </div>
  )
}

export default App