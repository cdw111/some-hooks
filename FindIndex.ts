type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
  ? true : false
  
type FindIndex<T extends any[], E, S extends any[] = []> =
S["length"] extends T["length"] ? never : Equal<T[S['length']], E> extends true ? S['length'] : FindIndex<T, E, [...S, 0]>