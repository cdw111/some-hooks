type MyRecord<K extends number | string | symbol,V> = {
    [key in K]: V
  }