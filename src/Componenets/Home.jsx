import React, { useState, useLayoutEffect } from 'react';
import NavBar from '../Componenets/NavBar';
import MobileView from '../Componenets/MobileView';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= 710);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      {isMobile ? <MobileView /> : <NavBar />}
    </div>
  );
}

export default Home;