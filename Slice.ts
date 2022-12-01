type Slice<
  A extends any[], 
  S extends number = 0, 
  E extends number = A['length'],
  F extends any[] = []> = F["length"] extends A['length'] ?
  [] :
  SmallerThan<F["length"],S> extends true ?
  [...Slice<A,S,E,[...F,any]>] :
  SmallerThan<F["length"],E> extends true ?
  [A[F["length"]],...Slice<A,S,E,[...F,any]>] :
  [...Slice<A,S,E,[...F,any]>]
  export default {}