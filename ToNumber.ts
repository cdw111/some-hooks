type ToNumber<T extends string,  S extends any[] = []> =
`${S["length"]}` extends T ? S["length"] : ToNumber<T, [...S, 0]>