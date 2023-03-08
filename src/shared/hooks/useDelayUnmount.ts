'use client';

import { useEffect, useState } from 'react';

export const useDelayUnmount = (
  isRendered: boolean,
  delayTime: number
): boolean => {
  const [shouldShowDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (isRendered && !shouldShowDiv) {
      setShowDiv(true);
    } else if (!isRendered && shouldShowDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isRendered, delayTime, shouldShowDiv]);
  return shouldShowDiv;
};
