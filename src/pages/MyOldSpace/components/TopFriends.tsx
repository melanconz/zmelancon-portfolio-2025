import React from 'react';
import '../styles/myspace.css';

export type Friend = {
  name: string;
  image: string;
  profileLink: string;
};

type TopFriendsProps = {
  friends: Friend[];
};

const TopFriends: React.FC<TopFriendsProps> = ({ friends }) => {
  return (
    <div className="myspace-top-friends">
      <h2>Top 8</h2>
      <div className="friends-grid">
        {friends.map((friend, index) => (
          <a
            key={index}
            href={friend.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="friend-card">
            <img src={friend.image} alt={friend.name} />
            <p>{friend.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopFriends;
