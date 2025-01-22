import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Notification() {
    let show = ()=>{
        NotificationManager.info('Notification message');
    }
  return (
    <div>
        <button onClick={show}>show</button>
      <NotificationContainer/>
    </div>
  )
}
