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



  type IsAny<T> = 1 extends T & 0 ? true : false

  type trmp = IsAny<any>





type Subtract<A extends number, B extends number, S extends any[] = [],Q extends any[] = [], D extends any[] = []> = 
SmallerThan<A, B> extends true ?
never : S["length"] extends B ?
Q["length"] extends A ?
D["length"] :
Subtract<A,B,[...S],[...Q,0],[...D,0]> :
Subtract<A,B,[...S,0],[...Q,0],[...D]>

type R = Subtract<4, 3>




type Add<X extends number,Y extends number,S extends any[] = [], T extends any[] = []> = S["length"] extends X ? T["length"] extends Y ? [...S,...T]["length"] : Add<X,Y,[...S],[...T,0]> : Add<X,Y,[...S,0],[]>

type Multiply<A extends number, B extends number, S extends any[] = []> = 
S["length"] extends B ?
0 :
Add<A, Multiply<A,B,[...S,0]>>


type AddTest = Multiply<0,0>


type SmallThan<A extends number,B extends number,S extends any[] = []> = S["length"] extends B ? false : S["length"] extends A ? true : SmallThan<A,B,[...S,0]>

type Divide<A extends number, B extends number,S extends any[] = []> = B extends 0 ?
never :
SmallThan<A,B> extends true ?
S["length"] :
Divide<Subtract<A,B>,B,[...S,0]>


type test1 = Divide<1,0>