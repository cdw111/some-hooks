type CamelCase<
  S extends string,
  T extends string = ""
> = S extends `${infer F}${infer L}${infer P}`
  ? T extends ""
    ? CamelCase<`${L}${P}`, `${T}${Uppercase<F>}`>
    : F extends "_"
    ? CamelCase<P, `${T}${Uppercase<L>}`>
    : CamelCase<`${L}${P}`, `${T}${F}`>
  : `${T}${S}`;
