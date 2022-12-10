type Abs<N extends number> = `${N}` extends `-${infer P}`
  ? StringToNumber<P>
  : N;
