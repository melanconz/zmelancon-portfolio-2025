import { useEffect, useRef, useState } from 'react';
import stickerImage from '../../assets/youre-a-star.png';
import './MagicCanvas.css';
import { Link } from 'react-router-dom';

const MagicCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stickers, setStickers] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hue = 0;

    const drawTrail = (x: number, y: number) => {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.fill();
      hue = (hue + 5) % 360;
    };

    const handleMouseMove = (e: MouseEvent) => {
      drawTrail(e.clientX, e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      setStickers((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="myspace-back">
        <Link to="/">Back to Homepage</Link>
      </div>
      <div className="magic-wrapper">
        <canvas ref={canvasRef} className="magic-canvas" />
        {stickers.map((s, i) => (
          <img
            key={i}
            src={stickerImage}
            alt="sticker"
            className="magic-sticker"
            style={{ left: s.x - 30, top: s.y - 50 }}
          />
        ))}
      </div>
    </>
  );
};

export default MagicCanvas;
