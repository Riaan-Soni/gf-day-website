import React, { useEffect, useRef } from 'react';

export default function FloatingHearts({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Create heart particle pool
    const hearts = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 200,
      size: 10 + Math.random() * 16,
      speedY: 0.6 + Math.random() * 1.2,
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: 0.3 + Math.random() * 0.5,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      color: ['#ff6b81', '#ff4757', '#e056fd', '#ff9ff3', '#feca57'][Math.floor(Math.random() * 5)]
    }));

    const drawHeart = (ctx, x, y, size, color, opacity, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();

      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      // Left curve
      ctx.bezierCurveTo(
        0, 0,
        -size / 2, 0,
        -size / 2, topCurveHeight
      );
      ctx.bezierCurveTo(
        -size / 2, (size + topCurveHeight) / 2,
        0, size,
        0, size
      );
      // Right curve
      ctx.bezierCurveTo(
        0, size,
        size / 2, (size + topCurveHeight) / 2,
        size / 2, topCurveHeight
      );
      ctx.bezierCurveTo(
        size / 2, 0,
        0, 0,
        0, topCurveHeight
      );

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach((h) => {
        h.y -= h.speedY;
        h.x += Math.sin(h.y * 0.01) * 0.5;
        h.rotation += h.rotSpeed;

        if (h.y < -50) {
          h.y = canvas.height + 50;
          h.x = Math.random() * canvas.width;
        }

        drawHeart(ctx, h.x, h.y, h.size, h.color, h.opacity, h.rotation);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="floating-hearts-canvas" />;
}
