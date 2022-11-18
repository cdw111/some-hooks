type STrim<T extends string> = T extends `${infer P}${infer W}` ? P extends ' ' ? STrim<W> : T : T
type Trim<T extends string> = Reserve<STrim<Reserve<STrim<T>>>>
type Reserve<T extends string> = T extends `${infer P}${infer W}` ? `${Reserve<W>}${P}` : ''
type a = Trim<"  a  Brr ">





type ReplaceAll<
  S extends string, 
  F extends string, 
  T extends string,
  > = F extends '' ? S : S extends `${F}${infer I}` ? `${T}${ReplaceAll<I, F, T>}` :  S extends `${infer K}${infer L}` ? `${K}${ReplaceAll<L, F, T>}` : S


  type q = ReplaceAll<'bfe.dev', '', '-'>



  type LargerThan<A extends number, B extends number, C extends any[] = []> = 
C["length"] extends A ?
false :
C["length"] extends B ?
true :
LargerThan<A,B,[...C,0]>
type SmallerThan<A extends number, B extends number, C extends any[] = []> = 
C["length"] extends B ?
false :
C["length"] extends A ?
true :
SmallerThan<A,B,[...C,0]>
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

    type r = SmallerThan<0,0>
  type temp = Slice<[1,2,3,4], 0, 2>
