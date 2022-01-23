/** Group list of items by mapKeys function. */
export function groupBy<T, K extends string>(
  items: readonly T[],
  mapKeys: (item: T) => K[] | K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const keyOrKeys = mapKeys(item);
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    for (const key of keys) {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    }
  }
  return result;
}
