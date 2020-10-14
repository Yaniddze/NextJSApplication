import { useEffect, useState } from 'react';
import { MinWidths } from '../app/screens';

export const useScreens = (): MinWidths => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (width >= MinWidths.PC) return MinWidths.PC;
  
  if (width >= MinWidths.Mobile) return MinWidths.Mobile;

  return MinWidths.PC;
};
