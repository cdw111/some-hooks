type Add<A extends number, B extends number, S extends any[] = [], T extends any[] = []> =
S["length"] extends A ?
T["length"] extends B ?
[...S, ...T]["length"] :
Add<A, B, S, [...T, 0]> :
Add<A, B, [...S, 0], T>