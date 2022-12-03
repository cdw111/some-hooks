type Multiply<
  A extends number,
  B extends number,
  S extends any[] = []
> = S["length"] extends B ? 0 : Add<A, Multiply<A, B, [...S, 0]>>;
