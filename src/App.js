import { Routes, Route , NavLink } from 'react-router-dom';
import React from 'react';

// Addmin
import './admin/addmin.css';
import Admin from './admin/Add_building';
import Add_building from './admin/Add_building';
import Add_room from './admin/Add_room';
import Edit_building from './admin/Edit_building';
import Edit_room from './admin/Edit_room';
import Login from './admin/Login';
import De_building from './admin/De_building';

//menu
import Home from './Menu/Home';
import Map from './Menu/Map';
import Booking from './Menu/Booking';
import Gallery from './Menu/Gallery';
import Select_room from './Menu/Select_room';
import Slidebar from './admin/Slidebar';
import TestLogin from './Menu/testLogin'

export default function App() {
  const addStyle = ({ isActive }) => isActive ? 'active' : '';
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Map' element={<Map />} />
      <Route path='/Booking' element={<Booking />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Select_room' element={<Select_room />} />
      <Route path='/Slidebar' element={<Slidebar />} />
      <Route path='/Admin' element={<Admin />} />
      <Route path='/Add_building' element={<Add_building />} />
      <Route path='/Add_room' element={<Add_room />} />
      <Route path='/Edit_building' element={<Edit_building />} />
      <Route path='/Edit_room' element={<Edit_room />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/De_building' element={<De_building />} />
      <Route path='/TestLogin' element={<TestLogin />} />
    </Routes>
  );
}