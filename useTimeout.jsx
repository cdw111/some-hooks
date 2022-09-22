import { useEffect, useRef } from 'react';
export function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback;

  useEffect(()=> {
    const id = setTimeout(()=>callbackRef.current(),delay);
    return () => clearTimeout(id)
  }, [delay])
  // your code here
}