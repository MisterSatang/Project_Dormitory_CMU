import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <>
      < Navbar />
      <div>
        <div className="d-flex position-relative">
          <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" className="w-100 image-containner" />
        </div>
        <div className="container-fluid content-booking-absolute">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 p-xl-4 px-xl-5 p-1 pt-4 bg-white shadow rounded-4">
              <div className="row">
                <div className="text-center fs-4 fw-bold">จองหอพัก นักศึกษามหาลัยเชียงใหม่</div>
              </div>
              <div className="row m-3">

                <div className="col-xl-5 col-12 ">
                  <div className="d-flex h-2 mb-1">
                    Email Address
                  </div>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    required
                    placeholder="Email@cmu.ac.th" />
                </div>
                <div className="col-xl-5 col-12">
                  <div className="d-flex h-2 mb-1">
                    Password
                  </div>
                  <input
                    type="password"
                    id="password"
                    required
                    className="form-control"
                    placeholder="Password" />
                </div>
                <div className="col-xl-2 col-12">
                  <div className="d-flex h-2 mb-1"></div>
                  <button type="button" className="btn btn-primary w-100 rounded-pill">Confirm</button>
                </div>
              </div>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
      < Footer />
    </>
  );
}
