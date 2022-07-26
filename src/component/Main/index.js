import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from '../../page/page1';
import Page2 from '../../page/page2';
import Page3 from '../../page/page3';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
    </Routes>
  );
}

export default Main;
