import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
import News from './Menu/News';
import Select_room from './Menu/Select_room';
import Slidebar from './admin/Slidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gallery />
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