import React from 'react';
import Home from './Componenets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileView from './Componenets/MobileView';
import Sidebar from './Componenets/Sidebar';
import MobileViewFilters from './Componenets/MobileViewFilters';
import LovedProducts from './Componenets/LovedProducts';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/mb' element={<MobileView />} />
          <Route path='/mvf' element={<MobileViewFilters />} />
          <Route path='/lovedProducts' element={<LovedProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
