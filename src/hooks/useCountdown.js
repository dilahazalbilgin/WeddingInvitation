import { useEffect, useMemo, useState } from 'react';

const getTimeLeft = (targetDate) => {
  const distance = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
};

export function useCountdown(targetDate) {
  const stableTarget = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(stableTarget));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(stableTarget));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [stableTarget]);

  return timeLeft;
}
