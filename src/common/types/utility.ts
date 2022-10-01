export type IgnoreUndefined<T> = {
  [P in keyof T as T[P] extends undefined ? never : P]: T[P]
};
