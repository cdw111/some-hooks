type LastItem<T extends any[]> = T extends [...infer F, infer P] ? P : never
