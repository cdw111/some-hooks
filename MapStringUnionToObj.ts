type MapStringUnionToObjectUnion<U extends string> = {
  [k in U]: { value: k };
}[U];
