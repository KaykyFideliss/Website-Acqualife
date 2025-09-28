'use client';
import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

const BubbleBackground = React.forwardRef(
  (
    {
      className,
      children,
      interactive = false,
      transition = { stiffness: 100, damping: 20 },
      colors = {
         first: '18,113,255',
          second: '18,113,255',
          third: '18,113,255',
          fourth: '18,113,255',
          fifth: '18,113,255',
          sixth: '255,255,255',
      },
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => containerRef.current);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, transition);
    const springY = useSpring(mouseY, transition);

    React.useEffect(() => {
      if (!interactive) return;
      const current = containerRef.current;
      if (!current) return;

      const handleMouseMove = (e) => {
        const rect = current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      };

      current.addEventListener('mousemove', handleMouseMove);
      return () => current.removeEventListener('mousemove', handleMouseMove);
    }, [interactive, mouseX, mouseY]);

    return (
      <div
        ref={containerRef}
        className={cn(
          'relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-300', //BG DO HERO
          className
        )}
        {...props}
      >
        <style>
          {`
            :root {
              --first-color: ${colors.first};
              --second-color: ${colors.second};
              --third-color: ${colors.third};
              --fourth-color: ${colors.fourth};
              --fifth-color: ${colors.fifth};
              --sixth-color: ${colors.sixth};
            }
          `}
        </style>

        {/* SVG filter */}
        <svg className="absolute top-0 left-0 w-0 h-0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Bubbles container */}
        <div className="absolute inset-0" style={{ filter: 'url(#goo) blur(40px)' }}>
          {/* Bubble 1 */}
          <motion.div
            className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.8)_0%,rgba(var(--first-color),0)_50%)]"
            animate={{ y: [-50, 50, -50] }}
            transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Bubble 2 rotating */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            style={{ transformOrigin: 'calc(50% - 400px) center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            <div className="rounded-full w-[80%] h-[80%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0%,rgba(var(--second-color),0)_50%)]" />
          </motion.div>

          {/* Bubble 3 rotating */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            style={{ transformOrigin: 'calc(50% + 400px) center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            <div className="absolute rounded-full w-[80%] h-[80%] top-[calc(50%+200px)] left-[calc(50%-500px)] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0%,rgba(var(--third-color),0)_50%)]" />
          </motion.div>

          {/* Bubble 4 */}
          <motion.div
            className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0%,rgba(var(--fourth-color),0)_50%)] opacity-70"
            animate={{ x: [-50, 50, -50] }}
            transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Bubble 5 rotating */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            style={{ transformOrigin: 'calc(50% - 800px) calc(50% + 200px)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          >
            <div className="absolute rounded-full w-[160%] h-[160%] top-[calc(50%-80%)] left-[calc(50%-80%)] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0%,rgba(var(--fifth-color),0)_50%)]" />
          </motion.div>

          {/* Interactive bubble */}
          {interactive && (
            <motion.div
              className="absolute rounded-full w-full h-full mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--sixth-color),0.8)_0%,rgba(var(--sixth-color),0)_50%)] opacity-70"
              style={{ x: springX, y: springY }}
            />
          )}
        </div>

        {children}
      </div>
    );
  }
);

BubbleBackground.displayName = 'BubbleBackground';

export { BubbleBackground };
