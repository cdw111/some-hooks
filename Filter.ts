type Filter<T extends any[], A> = T extends [infer F,...infer P] ? [F] extends [A] ? [F,...Filter<P,A>] : Filter<P,A> : [];
export default {};
