import React, { useState, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  const state = useState<T[]>(initialValue)


  return {
    value: state[0],
    push: useCallback((value: T) => {
      state[1]([...state[0],value])
    },[]),
    removeByIndex: useCallback((index: number) => {
      state[1]([...state[0].slice(0,index),...state[0].slice(index + 1)])
    },[])
    };
}