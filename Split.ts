type Split<
  S extends string,
  D extends string,
  T extends string = "",
  P extends string[] = []
> = S extends `${infer F}${infer L}`
  ? S extends `${D}${infer L}`
    ? Split<L, D, "", [...P, T]>
    : Split<L, D, `${T}${F}`, [...P]>
  : [...P, T];
export default {};
