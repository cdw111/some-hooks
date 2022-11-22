type TupleToString<T extends string[]> = T extends [infer F extends string,...infer D extends string[]] ? `${F}${TupleToString<D>}` : ``

export default {}
