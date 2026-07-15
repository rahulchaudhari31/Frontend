import { useState, useEffect, useRef } from "react";

export default function useCountUp(target, duration, delay = 0, trigger = true) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;

    let startTime = null;
    let cancelled = false;
    const timer = setTimeout(() => {
      hasRun.current = true;
      const animate = (timestamp) => {
        if (cancelled) return;
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setDone(true);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, delay, trigger]);

  return { count, done };
}
