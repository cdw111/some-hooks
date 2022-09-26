import { Ref, useRef, useState, useCallback } from 'react'

export function useHover() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const ref = useRef();
  const callbackRef = useCallback(node => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;

    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseEnter, handleMouseLeave]);

  // your code here
  return [callbackRef, isHovered];
}