type MyCapitalize<T extends string> = T extends `${infer F}${infer P}`
  ? `${Uppercase<F>}${P}`
  : never;
export default {};
