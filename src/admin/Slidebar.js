import React from 'react';

import{Link} from 'react-router-dom';

export default function Slidebar() {
    return (
        <>  
        <div className='col-xl-2 col-lg- col-3 bg-lights'>
            <div class="container-fluid bg-dark">
                        <div className="align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 test">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-pp text-decoration-none ">
                                <span className="fs-3 d-none d-sm-inline text-lights"><strong> Menu</strong></span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/Admin_home" href="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house text-lights" /> <span className="ms-1 d-none d-sm-inline text-lights">Home</span>
                                    </Link>
                                </li>

                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi bi-building text-lights me-1" /><span className="ms-1 d-none d-sm-inline text-lights">จัดการอาคาร</span>
                                    </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/Admin/Add_building" href="#" className="nav-link px-0 text-lights">เพิ่มอาคาร</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/Edit_building" href="#" className="nav-link px-0 text-lights">แก้ไขอาคาร</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/De_building" href="#" className="nav-link px-0 text-lights">ลบอาคาร</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi bi-door-open text-lights" /> <span className="ms-1 d-none d-sm-inline text-lights">จัดการห้อง</span></a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                    <li className="w-100">
                                            <Link to="/Admin/Add_room" href="#" className="nav-link px-0 text-lights">เพิ่มห้องพัก</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/Edit_room" href="#" className="nav-link px-0 text-lights">แก้ไขห้องพัก</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin/De_room" href="#" className="nav-link px-0 text-lights">ลบห้องพัก</Link>
                                        </li>
                                    </ul>
                                </li>
                                
                              
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-lights text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
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