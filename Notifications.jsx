import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* <h1>{call.name} Call is coming :</h1> */}
          <Button disabled color="primary">{call.name} Call is coming :</Button>
          <Button variant="contained" color="darkmagenta" onClick={answerCall}>
            Take Call
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
