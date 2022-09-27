import { useState } from 'react';
export function useToggle(on) {
  // your code here
  const [res,setRes] = useState(on);

  return [res,() => { setRes(!res) }]
}