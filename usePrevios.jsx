import { useRef } from 'react'
export function usePrevious(value) {
  const pre = useRef()
  const res = pre.current;
  pre.current = value

  return res
  // your code here
}