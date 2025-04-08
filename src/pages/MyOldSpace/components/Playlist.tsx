import { useTheme } from '../context/ThemeContext';

const oldSong = {
  title: 'Time to Pretend',
  artist: 'MGMT',
  youtubeId: 'B9dSYgd5Elk',
  autoplay: true,
};

const newSong = {
  title: 'Kyoto',
  artist: 'Phoebe Bridgers',
  youtubeId: 'WJ9-xN6dCW4',
  autoplay: true,
};

export default function Playlist() {
  const { theme } = useTheme();

  const playSong = theme === 'classic' ? oldSong : newSong;

  const { title, artist, youtubeId, autoplay } = playSong;

  return (
    <div className="myspace-playlist">
      <h2>Zachary's Playlist</h2>
      <div className="playlist-grid">
        <div key={youtubeId} className="playlist-item">
          <h3>
            {title} – {artist}
          </h3>
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${youtubeId}?${
              autoplay ? 'autoplay=1&mute=1' : ''
            }`}
            title={`${title} by ${artist}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
