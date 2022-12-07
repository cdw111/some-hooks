type SnakeCase<
  S extends string,
  T extends string = ""
> = S extends `${infer F}${infer P}`
  ? T extends ""
    ? SnakeCase<P, `${T}${F}`>
    : F extends Uppercase<F>
    ? SnakeCase<P, `${T}_${F}`>
    : SnakeCase<P, `${T}${F}`>
  : Lowercase<T>;
