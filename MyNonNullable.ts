type MyNonNullable<T> = T extends (null | undefined) ? never : T