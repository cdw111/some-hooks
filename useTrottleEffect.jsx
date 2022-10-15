function useThrottleEffect  (
    fn,
    args,
    delay
  ) {
    const [state, setState] = useState(null);
    const timeout = useRef();
    const nextArgs = useRef();
  
    useEffect(() => {
      if (timeout.current) {
        //如果有正在进行中的
        nextArgs.current = args;
      } else {
        setState(fn(...args));
        const timeoutCallback = () => {
          if (nextArgs.current) {
            setState(fn(...nextArgs.current));
            nextArgs.current = undefined;
          }
          timeout.current = undefined;
        };
        timeout.current = setTimeout(timeoutCallback, delay);
      }
    }, args);
  
    useUnMount(() => {
      timeout.current && clearTimeout(timeout.current);
    });
  
    return state;
  };
  