import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ProCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'text'>('default');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setCursorState('hover');
      } else if (target.closest('h1, h2, h3, p, span')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      
      {/* Outer Spotlight Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          width: cursorState === 'hover' ? 80 : cursorState === 'text' ? 40 : 32,
          height: cursorState === 'hover' ? 80 : cursorState === 'text' ? 40 : 32,
          backgroundColor: cursorState === 'hover' ? 'rgba(190, 242, 100, 0.1)' : 'rgba(190, 242, 100, 0)',
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring' as const, damping: 20, stiffness: 150 }}
      />

      {/* Trailing Glow Overlay */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default ProCursor;
