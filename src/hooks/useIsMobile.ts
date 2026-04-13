import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isXS, setIsXS] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 599px)');
    const update = () => setIsXS(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isXS;
}
