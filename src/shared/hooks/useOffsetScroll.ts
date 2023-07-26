import { useCallback, MouseEvent } from 'react';

export const useOffsetScroll = (offset: number) => {
  const offsetScroll = useCallback(
    (e: MouseEvent, targetId: string) => {
      e.preventDefault();

      const element = document.getElementById(targetId);
      if (!element) return;

      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
    [offset]
  );

  return offsetScroll;
};
