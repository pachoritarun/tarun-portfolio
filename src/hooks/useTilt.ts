import { useRef, useCallback } from 'react';

export const useTilt = (max = 10) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(8px)`;
    el.style.transition = 'transform 0.1s ease';
  }, [max]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};
