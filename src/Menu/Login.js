import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [students, setStudents] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const result = await axios.get("http://localhost:8000/students/");
      // console.log(result.data);
      setStudents(result.data);
    };
    getStudents();
  }, []);

  function login(inputUsername, inputPassword) {
    const usernameID = students.find(
      (student) => student.username == inputUsername
    );
    const passwordID = students.find(
      (student) => student.password == inputPassword
    );
    console.log(inputUsername);
    console.log(inputPassword);
    console.log(usernameID);
    console.log(passwordID);
    // console.log(inputUsername);
    // console.log(usernameID.username);
    if (usernameID != undefined && passwordID != undefined) {
      if (usernameID.id == passwordID.id) {
        window.location.href = `http://localhost:3000/Booking?id=${usernameID.id}`;
      } else {
        console.log("no");
      }
    } else {
      console.log("Don't have");
    }
  }
  const inputUser = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const inputPass = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  return (
    <>
      <Navbar />
      <div>
        <div class="d-flex position-relative">
          <img
            src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg"
            alt="Bg-cmu"
            className="w-100 image-containner"
          />
        </div>
        <div class="container-fluid content-booking-absolute">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10 p-xl-4 px-xl-5 p-1 pt-4 bg-white shadow rounded-4">
              <div class="row">
                <div class="text-center fs-4 fw-bold">
                  จองหอพัก นักศึกษามหาลัยเชียงใหม่
                </div>
              </div>
              <div class="row m-3">
                <div class="col-xl-5 col-12 ">
                  <div class="d-flex h-2 mb-1">Email Address</div>
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    required
                    placeholder="Email@cmu.ac.th"
                    onChange={inputUser}
                    value={username}
                  />
                </div>
                <div class="col-xl-5 col-12">
                  <div class="d-flex h-2 mb-1">Password</div>
                  <input
                    type="password"
                    id="password"
                    required
                    class="form-control"
                    placeholder="Password"
                    onChange={inputPass}
                    value={password}
                  />
                </div>
                <div class="col-xl-2 col-12">
                  <div class="d-flex h-2 mb-1"></div>
                  <button
                    type="button"
                    class="btn btn-primary w-100 rounded-pill"
                    onClick={() => login(username, password)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
