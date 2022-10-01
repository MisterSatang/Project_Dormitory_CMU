import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";

export default function Gallery() {
  let { id } = useParams();

  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    async function getGellery() {
      try {
        const imageGellery = await axios.get(
          `http://localhost:8000/gelleries/${id}`
        );
        setGalleries(imageGellery.data);
      } catch (error) {
        console.error(error);
      }
    }
    getGellery();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="col-12 p-0 m-0 ">
        <div className="flow row col-12 mg101">
          <h1>รูปภาพหอพักนักศึกษามหาวิทยาลัยเชียงใหม่</h1>
          <p>หอพักนักศึกษา อาคาร {id} </p>
        </div>

        <div className="row ">
          <div className="col"></div>
          <div className="col-10">
            <ul className="auto-grid " role="list">
              {galleries.image?.map((image) => (
                <li key={image.id}>
                  <div className="profile">
                    <h2 className="profile__name">หอพักนักศึกษา</h2>
                    <img
                      src={`http://localhost:8000/dormitories/img/${image?.buildingNo}/${image?.namefile}`}
                      alt="imageDormitory"
                    />
                  </div>
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
