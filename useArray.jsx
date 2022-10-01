import React, { useState, useCallback } from 'react'


export function useArray(initialValue)  {
  const state = useState(initialValue)


  return {
    value: state[0],
    push: useCallback((value) => {
      state[1]([...state[0],value])
    },[]),
    removeByIndex: useCallback((index) => {
      state[1]([...state[0].slice(0,index),...state[0].slice(index + 1)])
    },[])
    };
}