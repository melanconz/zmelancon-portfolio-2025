import React from 'react';
import '../styles/myspace.css';

type AboutMeProps = {
  bio: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ bio }) => {
  return (
    <div className="myspace-about">
      <h2>About Me</h2>
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
