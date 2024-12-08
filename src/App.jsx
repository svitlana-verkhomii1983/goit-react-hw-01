import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./JSON/userData.json";
import "modern-normalize";
import FriendsList from "./components/FriendList/FriendList";

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
      <FriendsList />
    </>
  );
};

export default App;
