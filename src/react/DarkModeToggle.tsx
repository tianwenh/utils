import React, { useEffect, useState, HTMLAttributes } from 'react';
import { getTheme, setTheme } from '../theme';

function getIsDark(): boolean {
  // Skip for SSR
  if (typeof window === 'undefined') {
    return false;
  }
  return getTheme() === 'dark';
}
export const DarkModeToggle: React.FC<HTMLAttributes<HTMLElement>> = (
  props
) => {
  const themeName = (isDark: boolean) => (isDark ? 'dark' : 'light');

  const [isDark, setIsDark] = useState(getIsDark());
  useEffect(() => {
    setTheme(themeName(isDark));
  }, [isDark]);

  return (
    <span {...props} onClick={() => setIsDark(!isDark)}>
      {isDark ? '🌘' : '🌔'}
    </span>
  );
};
