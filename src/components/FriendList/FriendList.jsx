import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../JSON/friends.json";

export default function FriendsList() {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
}
