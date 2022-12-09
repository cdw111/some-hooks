type StringToNumber<
  S extends string,
  T extends any[] = []
> = `${T["length"]}` extends S ? T["length"] : StringToNumber<S, [...T, 0]>;
type Abs<N extends number> = `${N}` extends `-${infer P}`
  ? StringToNumber<P>
  : N;
