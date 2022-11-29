type Trim<T extends string> =
T extends ` ${infer F}` ?
Trim<F> :
T extends `${infer E} ` ?
Trim<E> :
T

export default {}