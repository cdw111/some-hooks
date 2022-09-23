import { useRef, useEffect } from 'react';
export function useIsFirstRender() {
  const first  = useRef(true)
  useEffect(() => {
    first.current = false;
  },[])
  return first.current;
  // your code here
}