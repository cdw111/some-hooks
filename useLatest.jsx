function useLatest(value) {
    const ref = useRef(value);
    ref.current = value;
    return ref;
    }