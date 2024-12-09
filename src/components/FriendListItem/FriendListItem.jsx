import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      
      <img
        src={avatar}
        alt={`${name} avatar`}
        className={styles.avatar}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <span
        className={isOnline ? styles.online : styles.offline}>
       {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;