import React from 'react';
import './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" className="avatar" />
      <p className="friend-name">{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;