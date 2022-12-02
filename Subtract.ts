type Subtract<
  A extends number,
  B extends number,
  S extends any[] = [],
  Q extends any[] = [],
  D extends any[] = []
> = SmallerThan<A, B> extends true
  ? never
  : S["length"] extends B
  ? Q["length"] extends A
    ? D["length"]
    : Subtract<A, B, [...S], [...Q, 0], [...D, 0]>
  : Subtract<A, B, [...S, 0], [...Q, 0], [...D]>;

export default {};
