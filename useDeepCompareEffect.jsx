import isEqual from 'lodash/isEqual';
import { useEffect, useRef } from 'react';

const depsEqual = (aDeps, bDeps) => {
  return isEqual(aDeps, bDeps);
};

function useDeepCompareEffect (effect, deps) {
  const ref = useRef();
  const signalRef = useRef(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }

  useEffect(effect, [signalRef.current]);
};
