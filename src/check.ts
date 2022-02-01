export function assert(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw new Error(`Assert failure: ${message}`);
  }
}

export function checkExhastive(condition: never): never {
  return condition;
}
