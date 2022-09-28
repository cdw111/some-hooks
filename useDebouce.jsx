import { useEffect, useState } from 'react'
export function useDebounce(value, delay) {
  const [debounceValue,setItem] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setItem(value);
    },delay)
    return () => {
      clearTimeout(timer);
    }
  },[value,delay])
  return debounceValue;
  // your code here
}