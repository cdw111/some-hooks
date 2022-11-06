type FirstChar<T extends string> = T extends `${infer P}${infer F}` ? P : never; 
