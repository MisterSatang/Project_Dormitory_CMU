import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import FilterSexBuilding from "../Component/FilterSexBuilding";
import FilterFloorBuilding from "../Component/FilterFloorBuilding";
import Select_room from "../Component/Select_room";

export default function App() {
  const [dormitories, setDormitories] = useState([]);

  const [sexBuilding, setSexBuilding] = useState(3);
  const [floorBuilding, setFloorBuilding] = useState([]);
  const [cardRoom, setCardRoom] = useState([]);

  useEffect(() => {
    async function getDormitories() {
      try {
        let setRoom = [];
        // console.log({ sexBuilding });

        sexBuilding > 0
          ? setRoom.push(`sex=${sexBuilding}`)
          : setRoom.push(null);
        floorBuilding > 0
          ? setRoom.push(`floor=${floorBuilding}`)
          : setRoom.push(null);

        // console.log({ setRoom });

        const room =
          setRoom.filter((v) => v != null).length === 0
            ? ""
            : `?${setRoom.filter((v) => v != null).join("&")}`;

        // console.log(room);

        const dormitory = await axios.get(
          `http://localhost:8000/dormitories${room}`
        );
        // console.log(dormitory.data);
        setDormitories(dormitory.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDormitories();
  }, [sexBuilding, floorBuilding, cardRoom]);

  return (
    <>
      <Navbar />

      <div className="d-flex">
        <img
          src="img_dormitory/Select_room/11.jpg"
          alt="Bg-cmu"
          className="w-100 image-bg-select_room"
        />
      </div>
      <div className="container-fluid p-0">
        <div className="row mt-4 mx-4">
          <div className="col-xl-3 col-lg-4 col-md-5 col-12 col-sm-6 pe-4 ps-0">
            <div className="bg-white shadow rounded-top-4">
              <div className="pt-4 px-3  bg-light rounded-top-4 border-bottom border-1 border-3">
                <div className="d-flex align-items-center">
                  <img
                    src="img_dormitory/imageStudent/01.jpg"
                    alt="imageStudent"
                    className="mr-3 profile-student shadow-sm rounded-3"
                  />
                  <div className="ms-3">
                    <div className="d-inline-flex fs-5 m-0 me-2">สตางค์</div>
                    <div className="d-inline-flex fs-5 m-0">บุตรสัย</div>
                    <div className="font-weight-light text-muted mb-0">
                      คณะ ศิลปะ สื่อ เทคโนโลยี
                    </div>
                    <div className="font-weight-light text-muted mb-0">
                      สาขา DII
                    </div>
                  </div>
                </div>
                <div className="py-3 text-center text-gray">
                  ไม่มีการจองห้องพัก
                </div>
              </div>

              <div className="p-1 bg-light rounded-r-4 shadow-sm mb-4">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="ค้นหา : หมายเลขห้อง ?"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link text-dark"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-gray font-weight-bold text-uppercase px-3 small pb-3 mb-0">
                <i className="bi bi-funnel me-1"></i>Filter
              </p>

              <ul className="nav flex-column bg-light mb-0 px-4 py-3 rounded-ts-4">
                <li className="nav-item">
                  <div className="mb-1">หอพัก</div>
                  <FilterSexBuilding setSexBuilding={setSexBuilding} />
                </li>
                <li className="nav-item">
                  <div className="mb-1">ชั้น</div>
                  <FilterFloorBuilding setFloorBuilding={setFloorBuilding} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-0">
            <div className="row m-0">
              <Select_room
                dormitories={dormitories}
                setCardRoom={setCardRoom}
                sexBuilding={sexBuilding}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
