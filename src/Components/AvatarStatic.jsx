import React from 'react';
import IconUser from '../assets/icon-user.png';
import './avatarStatic.css';

class AvatarStatic extends React.Component {

  render() {
    return (
      <div className="AvatarStatic">
        <img src={IconUser} alt="icon User"/>
      </div>
    );
  }
}
// Render
export default AvatarStatic;
