import './styles/myspace.css';
import './styles/classic.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import zmprofileimage from './assets/zmprofileimage.jpg';
import TopFriends from './components/TopFriends';
import { mockFriends } from './appdata/MockFriends';
import Playlist from './components/Playlist';
import { Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import GlitterDivider from './components/GlitterDivider';

function MyOldSpace() {
  return (
    <ThemeProvider>
      <div className="myspace-back">
        <Link to="/">Back to Homepage</Link>
        <ThemeSwitcher />
      </div>
      <div className="myspace-container">
        <Header name="Zachary Melancon" profileImage={zmprofileimage} />
        <div className="profile-content">
          <div className="left-column">
            <AboutMe bio="Hey, I'm Zachary — a front-end wizard with a soft spot for glittery MySpace vibes and pixel-perfect UI. I turn coffee into code, wrangle React like it's second nature, and believe websites should feel as good as they look. 💻✨☕" />
            <GlitterDivider />
          </div>
          <div className="right-column">
            <Playlist />
            <TopFriends friends={mockFriends} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyOldSpace;
