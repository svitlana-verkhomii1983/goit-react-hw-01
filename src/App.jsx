import React from 'react';
import "./App.css";
import "modern-normalize";
import Profile from './components/Profile/Profile';
import userData from './JSON/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './JSON/friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;