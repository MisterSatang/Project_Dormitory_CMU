import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';

// Addmin
import Add_building from './admin/Add_building';
import Add_room from './admin/Add_room';
import Edit_building from './admin/Edit_building';
import Edit_room from './admin/Edit_room';
import Login_admin from './admin/Login_admin';
import De_building from './admin/De_building';
import De_room from './admin/De_room';
import Slidebar from './admin/Slidebar';
import Admin_home from './admin/Admin_home';
import Add_testFateBack from './admin/testFateBack';

//menu
import Home from './Menu/Home';
import Map from './Menu/Map';
import Login_user from './Menu/Login';
import Gallery from './Menu/Gallery';
import Booking from './Menu/Booking';
import Price_male from './Menu/Price_male';
import Price_female from './Menu/Price_female';
import Price from './Menu/Price';

export default function App() {
  const addStyle = ({ isActive }) => isActive ? 'active' : '';
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Map' element={<Map />} />
      <Route path='/Login' element={<Login_user />} />
      <Route path='/Booking' element={<Booking />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Price_male' element={<Price_male />} />
      <Route path='/Price_female' element={<Price_female />} />

      {/* page admin */}
      <Route path='/Admin' element={<Login_admin />} />
      <Route path='/Admin/Slidebar' element={<Slidebar />} />
      <Route path='/Admin/Add_building' element={<Add_building />} />
      <Route path='/Admin/Add_room' element={<Add_room />} />
      <Route path='/Admin/Edit_building' element={<Edit_building />} />
      <Route path='/Admin/Edit_room' element={<Edit_room />} />
      <Route path='/Admin/De_building' element={<De_building />} />
      <Route path='/Admin/De_room' element={<De_room />} />
      <Route path='/Admin/Admin_home' element={<Admin_home />} />
      <Route path='/Admin/testFateBack' element={<Add_testFateBack />} />
      <Route path='/Admin/Price' element={<Price />} />
    </Routes>
  );
}