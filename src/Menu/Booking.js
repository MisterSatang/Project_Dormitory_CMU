import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../Component/Nav";
import Footer from "../Component/Footer";
import FilterSexBuilding from "../Component/FilterSexBuilding";
import FilterFloorBuilding from "../Component/FilterFloorBuilding";
import Select_room from "../Component/Select_room";

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const [students, setStudents] = useState([]);
  const [stuReserve, setStuReserve] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const result = await axios.get(`http://localhost:8000/students/${id}`);
      // console.log(result.data);
      setStudents(result.data);
    };
    getStudents();
  }, [stuReserve]);

  const [dormitories, setDormitories] = useState([]);

  const [sexBuilding, setSexBuilding] = useState(1);
  const [floorBuilding, setFloorBuilding] = useState([]);
  const [cardRoom, setCardRoom] = useState([]);
  const [search, setSearch] = useState([]);

  console.log();

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
        search > 0 ? setRoom.push(`search=${search}`) : setRoom.push(null);

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
  }, [sexBuilding, floorBuilding, cardRoom, search]);

  const dataResevre = dormitories.map((room) => room.rooms).flat();
  const roomID = dataResevre.find((room) => students.roomID);

  function deleteReserve() {
    // console.log(dataResevre);
    // console.log(students.roomID);
    // console.log(roomID);

    if (window.confirm(`คุณต้องการยกเลิกการจองห้อง ใช่ไหม`) == true) {
      axios
        .put(
          `http://localhost:8000/rooms/${students.buildingNo}/${students.roomID}`,
          {
            floor: roomID.floor,
            roomNo: roomID.roomNo,
            numMax: roomID.numMax,
            numStudent: roomID.numStudent - 1,
          }
        )
        .then(() => {
          setCardRoom(dormitories);
        });
      axios
        .put(`http://localhost:8000/students/${students.id}`, {
          statusReserve: false,
          roomID: null,
          buildingNo: null,
          roomNo: "",
        })
        .then(() => {
          setStuReserve(students);
        });
    } else {
      console.log("no");
    }
  }

  const onChange = (e) => {
    setSearch(e.target.value);
  };

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
      <div className="container-fluid p-0 col-sm-mb-3">
        <div className="row mt-4 mx-4">
          <div className="col-xl-3 col-lg-4 col-md-5 col-12 col-sm-6 pe-4 ps-0">
            <div className="bg-white shadow rounded-top-4">
              <div className="pt-4 px-3  bg-light rounded-top-4 border-bottom border-1 border-3">
                <div className="d-flex align-items-center">
                  <img
                    src={students.imageURL}
                    alt="imageStudent"
                    className="mr-3 profile-student shadow-sm rounded-3"
                  />
                  <div className="ms-3">
                    <div className="d-inline-flex fs-5 m-0 me-2">
                      {students.firsname}
                    </div>
                    <div className="d-inline-flex fs-5 m-0">
                      {students.lastname}
                    </div>
                    <div className="font-weight-light text-muted mb-0">
                      {`คณะ : ${students.faculty}`}
                    </div>
                    <div className="font-weight-light text-muted mb-0">
                      {`สาขา : ${students.major}`}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    students.statusReserve
                      ? "py-3 text-center text-white bg-success my-1 px-1"
                      : "py-3 text-center text-white bg-danger my-1 px-1"
                  }
                >
                  {students.statusReserve
                    ? `จองหอ ${students.buildingNo} ห้อง ${students.roomNo} สำเร็จ`
                    : "ยังไม่ได้จองหอพัก"}
                  {students.statusReserve ? (
                    <button
                      type="button"
                      class="btn btn-outline-light bg-green-600 ms-3 cancerResever"
                      onClick={() => deleteReserve()}
                    >
                      ยกเลิก
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="p-1 bg-white rounded-r-4 shadow-sm mb-4">
                <div className="input-group">
                  <input
                    onChange={onChange}
                    type="search"
                    placeholder="ค้นหา : หมายเลขห้อง ?"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                    disabled={students.statusReserve ? true : false}
                  />
                  <div className="input-group-append">
                    <div className="btn btn-link text-dark">
                      <i className="bi bi-search"></i>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray font-weight-bold text-uppercase px-3 small pb-3 mb-0">
                <i className="bi bi-funnel me-1"></i>Filter
              </p>
              <ul className="nav flex-column bg-light mb-0 px-4 py-3 rounded-ts-4">
                <li className="nav-item">
                  <div className="mb-1">หอพัก</div>
                  <FilterSexBuilding
                    setSexBuilding={setSexBuilding}
                    sex={students.sex}
                    students={students}
                  />
                </li>
                <li className="nav-item">
                  <div className="mb-1">ชั้น</div>
                  <FilterFloorBuilding
                    setFloorBuilding={setFloorBuilding}
                    students={students}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-0">
            <div className="row m-0">
              {students.statusReserve ? (
                <div className="container-fluid m-1">
                  <div className="row mt-6rem">
                    <div className="text-center text-gray text-5rem">
                      จองห้องพักสำเร็จ
                    </div>
                  </div>
                  <div className="">
                    <div className="text-center text-gray fs-2">
                      ไม่สามารถจองเพิ่มได้
                    </div>
                  </div>
                </div>
              ) : (
                <Select_room
                  dormitories={dormitories}
                  setCardRoom={setCardRoom}
                  sexBuilding={sexBuilding}
                  students={students}
                  setStuReserve={setStuReserve}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
