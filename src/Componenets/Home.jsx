import React, { useState, useLayoutEffect } from 'react';
import NavBar from '../Componenets/NavBar';
import MobileView from '../Componenets/MobileView';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= 720);
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