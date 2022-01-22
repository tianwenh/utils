import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top when navigating to new pages.
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

// Scroll to anchor when navigating to new pages.
export function useScrollToAnchor() {
  const { hash } = useLocation();
  useEffect(() => {
    const anchor = document.getElementById(hash.slice(1));
    anchor?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
