import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";

export default function Gallery() {
  let { id } = useParams();
  //   console.log(id);
  const images = new Array(38).fill(0).map((value, index) => index + 1);
  console.log(images);
  return (
    <>
      <Navbar />
      <div className="col-12 p-0 m-0 ">
        <div className="flow row col-12 mg101">
          <h1>รูปภาพหอพักนักศึกษามหาวิทยาลัยเชียงใหม่</h1>
          <p>หอพักนักศึกษาหญิง อาคาร 1 </p>
        </div>

        <div className="row ">
          <div className="col"></div>
          <div className="col-10">
            <ul className="auto-grid " role="list">
              {images.map((image) => (
                <li>
                  <a className="profile">
                    <h2 className="profile__name">01</h2>
                    <img
                      src={`http://localhost:8000/dormitories/img/${image}.jpg`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
