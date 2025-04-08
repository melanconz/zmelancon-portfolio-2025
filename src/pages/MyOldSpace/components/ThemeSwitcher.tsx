import { Button } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <Button variant="text" onClick={toggleTheme}>
        Switch to {theme === 'modern' ? '✨ Throwback ✨' : '💻 Modern 💻'}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
