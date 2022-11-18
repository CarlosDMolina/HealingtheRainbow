import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/shop' element={<Shop />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default Main;