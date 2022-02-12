import BananaSlug from 'github-slugger';

export const slugify = BananaSlug.slug;

export function className(names: Record<string, boolean>): string {
  const activeNames = Object.entries(names)
    .filter(([, enabled]) => enabled)
    .map(([name]) => name);
  return activeNames.join(' ');
}
