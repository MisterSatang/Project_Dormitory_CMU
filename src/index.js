import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Menu/Home';
import Map from './Menu/Map';
import News from './Menu/News';
import Booking from './Menu/Booking';
import Select_room from './Menu/Select_room';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Select_room/>
  </React.StrictMode>
);

reportWebVitals();