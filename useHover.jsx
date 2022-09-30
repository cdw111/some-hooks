
import React, { Ref } from 'react'

export function useFocus() {
 const [isFocused, setIsFocused] = React.useState(false);

const ref = React.useRef<T>(null);

 React.useEffect(()=>{
   if(!ref.current) return;

   const onFocus = ()=> setIsFocused(true);
   const onBlur = ()=> setIsFocused(false);

   const currentEl = ref.current;

   currentEl.addEventListener("focus", onFocus);
   currentEl.addEventListener("blur",onBlur);

   return ()=>{
   currentEl.removeEventListener("focus", onFocus);
   currentEl.removeEventListener("blur",onBlur);
   }
 })

return [ref,isFocused];
}