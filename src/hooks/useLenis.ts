import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    function handleAnchorClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!href.startsWith('#') || href === '#') return;

      const section = document.getElementById(href.slice(1));
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section, { offset: -80 });
      history.pushState(null, '', href);
    }

    requestAnimationFrame(raf);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}