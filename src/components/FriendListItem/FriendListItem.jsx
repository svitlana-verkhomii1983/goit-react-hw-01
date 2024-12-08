export default function FriendsListItem({ avatar, name, isOnline }) {
    return (
        <>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
            <p>{isOnline}</p>
        </>
    );
}
