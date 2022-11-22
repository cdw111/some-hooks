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



type MyCapitalize<T extends string> = T extends `${infer F}${infer P}` ? `${Uppercase<F>}${P}` : never;
type aaa = MyCapitalize<''>


type Split<S extends string, D extends string, T extends string = '', P extends string[] = []> =
S extends `${infer F}${infer L}` ?
S extends `${D}${infer L}` ?
Split<L,D,'',[...P,T]> :
Split<L,D,`${T}${F}`,[...P]> :
[...P,T]

type asd = Split<'bfe.bfe.bfe', 'bfe'>

type SnakeCase<S extends string,T extends string = ''> =
S extends `${infer F}${infer P}` ?
T extends '' ?
SnakeCase<P,`${T}${F}`> :
F extends Uppercase<F> ?
SnakeCase<P,`${T}_${F}`> :
SnakeCase<P,`${T}${F}`> :
Lowercase<T>

type A = SnakeCase<'BigFrontEnd'>


type CamelCase<S extends string,T extends string = ''> =
S extends `${infer F}${infer L}${infer P}` ?
T extends '' ?
CamelCase<`${L}${P}`,`${T}${Uppercase<F>}`> :
F extends '_' ?
CamelCase<P,`${T}${Uppercase<L>}`> :
CamelCase<`${L}${P}`,`${T}${F}`> :
`${T}${S}`

type B = CamelCase<'big_front_end'> 


type StringToNumber<S extends string,T extends any[] = []> = `${T["length"]}` extends S ? T["length"] : StringToNumber<S, [...T,0]>
type Abs<N extends number> = `${N}` extends `-${infer P}` ? StringToNumber<P> : N

type ObjectPaths<O extends Record<string, any>> = {
  [K in keyof O]: K extends string 
                  ? O[K] extends Record<string, any> ? `${K}.${ObjectPaths<O[K]>}` : `${K}`
                  : never
}[keyof O];


type DiffKeys<
  A extends Record<string, any>,
  B extends Record<string, any>
> = Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>

type MapStringUnionToObjectUnion<U extends string> = { [k in U]: { value: k } }[U]
type UndefinedToNull<T> = T extends undefined ? null :
    T extends [infer A] ? [UndefinedToNull<A>] :
    T extends [infer A, ...infer B] ? [UndefinedToNull<A>, ...UndefinedToNull<B>] :
    T extends (infer R)[] ? UndefinedToNull<R>[]:
    T extends {} ? { [k in keyof T]: UndefinedToNull<T[k]>}:
    T extends infer R | undefined ? R | null : never;

    

    type TupleToString<T extends string[]> = T extends [infer F extends string,...infer D extends string[]] ? `${F}${TupleToString<D>}` : ``


    type ASA = TupleToString<['as','afsf','asff']>