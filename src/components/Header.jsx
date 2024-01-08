import HeaderDesktop from './Header/HeaderDesktop';
import HeaderMobile from './Header/HeaderMobile';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  const handleSize = () => {
    setIsMobile(window.innerWidth <= 950);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    console.log('Screen size is mobile: ', isMobile);
  }, [isMobile]);

  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
