import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Menu/Home';
import Map from './Menu/Map';
import News from './Menu/News';
import Booking from './Menu/Booking';
import Select_room from './Menu/Select_room';

import reportWebVitals from './reportWebVitals';
import Gallery from './Menu/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Admin from './admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>
);

reportWebVitals();

// const rooms = [{ id: 1, buildingNo: '1', roomNo: '5', status: 'Occupied'}];
// axios.get('http://localhost:8000/rooms')
// // GET /rooms     => rooms  [{ id: 1, buildingNo: '1', roomNo: '5'}];
// // GET /rooms/:id  { id: 1, buildingNo: '1', roomNo: '5', status: 'Occupied'}
// // POST /rooms 
// // PUT /rooms/:id
// // DELETE /rooms/:id