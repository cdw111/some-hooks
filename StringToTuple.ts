type StringToTuple<T extends string> = T extends `${infer P}${infer F}` ? [P,...StringToTuple<F>] : []