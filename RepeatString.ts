type RepeatString<T extends string, C extends number, S extends any[] = [],P extends string = ''> =
S["length"] extends C ?
P :
RepeatString<T,C,[...S,0],`${T}${P}`>

