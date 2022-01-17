export function restoreTheme() {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const theme = getTheme() ?? (darkQuery.matches ? 'dark' : 'light');
  setTheme(theme);
  // Dark mode color transition, wait for react's inital render.
  requestAnimationFrame(() => {
    document.body.style.transition =
      'color 0.5s ease-out, background 0.5s ease-out';
  });
}

export function getTheme() {
  return localStorage.getItem('theme');
}

export function setTheme(theme: string) {
  if (theme === 'dark') {
    document.documentElement.className = 'dark';
  } else {
    document.documentElement.className = '';
  }
  localStorage.setItem('theme', theme);
}
