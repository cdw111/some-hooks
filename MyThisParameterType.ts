type MyThisParameterType<T> = T extends (this: infer R)=> any ? R : unknown;
