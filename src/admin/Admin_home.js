import Slidebar from "./Slidebar";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function Admin_home() {
  const [switchReserve, setSwitchReserve] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function getSwitch() {
      try {
        const statusSwitch = await axios.get(
          "http://localhost:8000/adminSettings"
        );
        setSwitchReserve(statusSwitch.data);
      } catch (error) {
        console.error(error);
      }
    }
    getSwitch();
  }, [status]);

  //   console.log(switchReserve.disableReserve);
  function onClick() {
    if (switchReserve.disableReserve) {
      axios
        .put(`http://localhost:8000/adminSettings`, {
          disableReserve: false,
        })
        .then(() => {
          setStatus(switchReserve);
        });
    } else {
      axios
        .put(`http://localhost:8000/adminSettings`, {
          disableReserve: true,
        })
        .then(() => {
          setStatus(switchReserve);
        });
    }
  }

  return (
    <>
      <div className="container-fluid p-0 bg-admin">
        <div className="row">
          <Slidebar />
          <div className="bg-lights col">
            <div className="row h-100vh col-12 justify-content-center">
              <div className=" col-12 me-4 mb-4 d-flex justify-content-center align-items-end">
                <img
                  src="https://www.cmu.ac.th/content/Article/2019/3dc04451-5e46-473d-9a58-4d02a893859d/2a928522-706c-453f-9e78-98a90945ef91.png"
                  className="h_admin"
                />
              </div>
              <div className="text-color col-12  justify-content-center ">
                <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                  <h3>
                    <strong>ยินดีต้อนรับเข้าสู่ระบบ Admin Dormitory CMU</strong>
                  </h3>
                </div>
                <div className="col-12 d-flex justify-content-center ">
                  <div className="col-5 d-flex justify-content-center fs-5">
                    {switchReserve.disableReserve ? (
                      <>
                        <div>
                          ระบบจองกำลังเปิดอยู่...
                          <button
                            type="button"
                            class="btn btn-danger ms-3"
                            onClick={onClick}
                          >
                            ปิดจอง
                          </button>
                          <div />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          ระบบจองปิด
                          <button
                            type="button"
                            class="btn btn-success ms-3"
                            onClick={onClick}
                          >
                            เปิดจอง
                          </button>
                          <div />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-1" />
      </div>
    </>
  );
}
