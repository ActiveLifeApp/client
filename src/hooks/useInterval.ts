import { useCallback, useEffect, useRef } from 'react';

type Callback = () => void;

const useInterval = (callback: Callback, delay: number) => {
  const savedCallback = useRef<Callback | null>(null);
  const intervalId = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    if (intervalId.current) clear();

    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
    }

    return () => clear();
  }, [callback, clear, delay]);

  return clear;
};

export default useInterval;
