import React from 'react';

import{Link} from 'react-router-dom';

export default function Slidebar() {
    return (
        <>  
        <div className='col-xl-2 col-lg-3 col-4'>
            <div class="container-fluid bg-light">
                        <div className="align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 test">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-pp text-decoration-none ">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house text-dark" /> <span className="ms-1 d-none d-sm-inline text-dark">Home</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi bi-building text-dark" /><span className="ms-1 d-none d-sm-inline text-dark ">จัดการอาคาร</span>
                                    </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/Admin/Add_building" href="#" className="nav-link px-0 text-dark">เพิ่มอาคาร</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/Edit_building" href="#" className="nav-link px-0 text-dark">แก้ไขอาคาร</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/De_building" href="#" className="nav-link px-0 text-dark">ลบอาคาร</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-5 bi bi-door-open text-dark" /> <span className="ms-1 d-none d-sm-inline text-dark">จัดการห้อง</span></a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                    <li className="w-100">
                                            <Link to="/Admin/Add_room" href="#" className="nav-link px-0 text-dark">เพิ่มห้องพัก</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/Edit_room" href="#" className="nav-link px-0 text-dark">แก้ไขห้องพัก</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/De_room" href="#" className="nav-link px-0 text-dark">ลบห้องพัก</Link>
                                        </li>
                                    </ul>
                                </li>
                                
                              
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-person"> </i>
                                    <span className="d-none d-sm-inline mx-1">Admin</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-secondary text-small shadow" aria-labelledby="dropdownUser1">
                                    
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                    </div>
                    
            </div>
        </div>
        </>
    );
}