import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [settings, setSettings] = useState([]);
  const [dormitories, setDormitories] = useState([]);

  useEffect(() => {
    const getSettings = async () => {
      const result = await axios.get("http://localhost:8000/adminSettings");
      setSettings(result.data);
    };
    getSettings();
  }, []);
  useEffect(() => {
    async function getDormitories() {
      try {
        const dormitory = await axios.get(`http://localhost:8000/dormitories`);
        setDormitories(dormitory.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDormitories();
  }, []);

  const dormitoryMale = dormitories.filter(
    (dormitory) => dormitory.sex == "builderMale"
  );
  const dormitoryFemale = dormitories.filter(
    (dormitory) => dormitory.sex == "builderFemale"
  );

  return (
    <>
      <div className="container fixed-top border-0 rounded-4 bg-white shadow mt-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="text-purple fs-5 fw-bold">หอพักนักศึกษา CMU</div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    <i class="bi bi-house me-1"></i>หน้าหลัก
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-building me-1"></i>
                    หอพักนักศึกษาชาย
                  </a>
                  <ul className="dropdown-menu">
                    {dormitoryMale.map((dorMale) => (
                      <li key={dorMale.id}>
                        <Link
                          to={`/Gallery/${dorMale.id}`}
                          className="joinBtn dropdown-item d-inline-flex"
                        >
                          {dorMale.name}
                          <div className="ms-2 fs-6 text-glay">
                            : {dorMale.tel}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-building me-1"></i>
                    หอพักนักศึกษาหญิง
                  </a>
                  <ul className="dropdown-menu">
                    {dormitoryFemale.map((dorFemale) => (
                      <li key={dorFemale.id}>
                        <Link
                          to={`/Gallery/${dorFemale.id}`}
                          className="joinBtn dropdown-item d-inline-flex"
                        >
                          {dorFemale.name}
                          <div className="ms-2 fs-6 text-glay">
                            : {dorFemale.tel}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <Link
                  to="/Price"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  <i class="bi bi-coin me-1"></i>
                  ราคาหอพัก
                </Link>

                <li className="nav-item">
                  <Link to="/Map" className="nav-link" href="#">
                    <i class="bi bi-map me-1"></i>แผนที่
                  </Link>
                </li>
              </ul>
              <Link
                to="/Login"
                type="button"
                class="btn btn-outline-primary"
                disabled={settings.disableReserve}
              >
                <i class="bi bi-pen me-1"></i>
                {settings.disableReserve ? "ไม่สามารถจองได้" : "จองห้องพัก"}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
//  ${settings.isAvailableReserve ? '' : 'btn-disabled'}
// GET /admin/settings    => { isAvailable: true, a: true }
