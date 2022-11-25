type LargerThan<A extends number, B extends number, S extends any[] = []> =
S["length"] extends A ?
false :
S["length"] extends B ?
true :
LargerThan<A, B, [...S,0]>