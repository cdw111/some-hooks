type UndefinedToNull<T> = T extends undefined
  ? null
  : T extends [infer A]
  ? [UndefinedToNull<A>]
  : T extends [infer A, ...infer B]
  ? [UndefinedToNull<A>, ...UndefinedToNull<B>]
  : T extends (infer R)[]
  ? UndefinedToNull<R>[]
  : T extends {}
  ? { [k in keyof T]: UndefinedToNull<T[k]> }
  : T extends infer R | undefined
  ? R | null
  : never;
