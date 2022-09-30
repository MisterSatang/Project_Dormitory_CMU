import React from 'react';
import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';


export default function Price() {
    return (
        <>
            < Navbar />
            <div className='col-12 p-0 m-0 '>
                <div className="flow row col-12 mg101">
                    <h1>ราคาหอพักนักศึกษามหาวิทยาลัยเชียงใหม่</h1>
                    <p>Chiang Mai University student dormitory prices</p>
                </div>

            </div>
            <div className="container h-100vh">
                <div className="row py-3">
                    <div className="col-lg-7 mx-auto m-3">
                        <div className="card shadow mb-4">
                            <div className="bg-pp card-body p-5">
                                <h4 className="mb-4 text-light d-flex justify-content-center"><strong>กรุณาเลือกหอพักที่ต้องการทราบราคา</strong></h4>
                                <div className="dropdown d-flex justify-content-center">
                                    <button className="btn btn-light dropdown-toggle col-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        เลือกหอพักนักศึกษา
                                    </button>

                                    <ul className="dropdown-menu">
                                        <Link to="/Price_male"><button className="joinBtn dropdown-item " type="button">หอพักนักศึกษาชายมหาวิทยาลัยเชียงใหม่</button></Link>
                                        <Link to="/Price_female"><button className="joinBtn dropdown-item" type="button">หอพักนักศึกษาหญิงมหาวิทยาลัยเชียงใหม่</button></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            < Footer />
        </>
    );
}
