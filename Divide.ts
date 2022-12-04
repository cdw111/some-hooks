type Divide<
  A extends number,
  B extends number,
  S extends any[] = []
> = B extends 0
  ? never
  : SmallThan<A, B> extends true
  ? S["length"]
  : Divide<Subtract<A, B>, B, [...S, 0]>;
export default {};
