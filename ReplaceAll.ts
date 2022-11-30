type ReplaceAll<
  S extends string, 
  F extends string, 
  T extends string,
  > = F extends '' ? S : S extends `${F}${infer I}` ? `${T}${ReplaceAll<I, F, T>}` :  S extends `${infer K}${infer L}` ? `${K}${ReplaceAll<L, F, T>}` : S

  export default {}