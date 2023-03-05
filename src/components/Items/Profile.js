import React from 'react';
import Avatar from 'react-avatar';
import "../../css/Box.css"

const Profile = function(props) {
 
return (
  <div className='text-left padding'>
        <Avatar className='avatar' src={props.image} round={true} size="40"/> 
        &nbsp;&nbsp;Hello <b>{props.name}</b>
  </div>
);

};

export default Profile;
