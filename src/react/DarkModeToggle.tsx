import React, { useEffect, useState } from 'react';
import { getTheme, setTheme } from '../theme';

function getIsDark(): boolean {
  // Skip for SSR
  if (typeof window === 'undefined') {
    return false;
  }
  return getTheme() === 'dark';
}
export const DarkModeToggle: React.FC<{ className: string }> = () => {
  const themeName = (isDark: boolean) => (isDark ? 'dark' : 'light');

  const [isDark, setIsDark] = useState(getIsDark());
  useEffect(() => {
    setTheme(themeName(isDark));
  }, [isDark]);

  return <span onClick={() => setIsDark(!isDark)}>{isDark ? '🌘' : '🌔'}</span>;
};
