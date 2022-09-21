import React from 'react';

export default function Navbar() {
    return (
        <>
            <div className="container fixed-top border-0 rounded-4 bg-white shadow mt-2">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><div className="text-purple fs-5 fw-bold">หอพักนักศึกษา CMU</div></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <i class="bi bi-book me-1"></i>ข่าวสาร</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-building me-1"></i>
                                        หอพักนักศึกษาชาย
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 1
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 2
                                                <div className="ms-2 fs-6 text-glay">: 053-944712</div>
                                            </a>
                                        </li><li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 3
                                                <div className="ms-2 fs-6 text-glay">: 053-944733</div>
                                            </a>
                                        </li><li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 4
                                                <div className="ms-2 fs-6 text-glay">: 053-944734</div>
                                            </a>
                                        </li><li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 5
                                                <div className="ms-2 fs-6 text-glay">: 053-944735</div>
                                            </a>
                                        </li><li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 6
                                                <div className="ms-2 fs-6 text-glay">: 053-944736</div>
                                            </a>
                                        </li><li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักชาย 7
                                                <div className="ms-2 fs-6 text-glay">: 053-944737</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-building me-1"></i>
                                        หอพักนักศึกษาหญิง
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 1
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 2
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 3
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 4
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 5
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 6
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 7
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 8
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 9
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 10
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 11
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-inline-flex" href="#">หอพักหญิง 12
                                                <div className="ms-2 fs-6 text-glay">: 053-944711</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i class="bi bi-map me-1"></i>แผนที่</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Coming Soon</a>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-outline-primary">
                                <i class="bi bi-pen me-1"></i>จองห้อง</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

