export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '-')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function className(names: Record<string, boolean>): string {
  const activeNames = Object.entries(names)
    .filter(([, enabled]) => enabled)
    .map(([name]) => name);
  return activeNames.join(' ');
}
