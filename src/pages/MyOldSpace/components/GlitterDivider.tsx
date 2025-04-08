import Lottie from 'lottie-react';
import devAnimation from '../assets/lottie/Animation - 1744129780791.json';
import { useTheme } from '../context/ThemeContext';

export default function GlitterDivider() {
  const { theme } = useTheme();
  if (theme !== 'classic')
    return (
      <div className="modern-sticker">
        <Lottie
          animationData={devAnimation}
          loop={true}
          style={{ width: 500, height: 500 }}
        />
      </div>
    );

  return (
    <img
      src="http://www.fillster.com/images/glitters/36v.gif"
      alt="glitter divider"
      className="glitter-divider"
    />
  );
}
