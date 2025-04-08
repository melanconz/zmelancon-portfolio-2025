import React from 'react';
import '../styles/myspace.css';

type HeaderProps = {
  name: string;
  profileImage: string;
};

const Header: React.FC<HeaderProps> = ({ name, profileImage }) => {
  return (
    <div className="myspace-header">
      <img className="profile-pic" src={profileImage} alt="Profile" />
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
