import React from 'react';
import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import {Link} from 'react-router-dom';


export default function Price_male() {
    return (
        <>
            < Navbar />
            <div className='col-12 p-0 m-0'>
                <div className="flow row col-12 mg101">
                    <h1>ราคาหอพักนักศึกษาชายมหาวิทยาลัยเชียงใหม่</h1>
                    <p>Chiang Mai University student dormitory prices</p>
                </div>
                <div className="dropdown d-flex justify-content-center">
                    <button className="btn btn-secondary  dropdown-toggle col-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        เลือกหอพักนักศึกษา
                    </button>
                    <ul className="dropdown-menu">
                        <Link to="/Price_male"><button className="joinBtn dropdown-item " type="button">หอพักนักศึกษาชายมหาวิทยาลัยเชียงใหม่</button></Link>
                        <Link to="/Price_female"><button className="joinBtn dropdown-item" type="button">หอพักนักศึกษาหญิงมหาวิทยาลัยเชียงใหม่</button></Link>
                    </ul>
                </div>
            </div>
            <div className="container">
                
                <div className="row py-3">
                    <div className="col-lg-7 mx-auto">

                        <div className="card shadow mb-4">
                            <div className="card-body p-5">
                                <h4 className="mb-4 text-purple "><strong>หอพักนักศึกษาชายอาคาร 1 (CD) และอาคาร 2 (GH)</strong></h4>
                                <ul className="list-unstyled">
                                    <h6 className="mb-2 "><strong>ค่าบำรุงหอพักนักศึกษา</strong> </h6>
                                    <li className="mb-2">- ค่าบำรุงหอพัก คนละ 2,500 บาท/เดือน.</li>
                                    <li className="mb-2">- ค่าบำรุงหอพัก (แบบเหมาห้อง) 5,000 บาท/เดือน</li>
                                    <h6 className="mb-2"><strong>ค่าประกันของเสียหาย</strong> </h6>
                                    <li className="mb-2">- คนละ 2,500 บาท</li>
                                    <li className="mb-2">- คนละ 2,500 บาท (แบบเหมาห้อง)</li>
                                    <h6 className="mb-2"><strong>ค่าทำความสะอาด</strong> </h6>
                                    <li className="mb-2">- ค่าทำความสะอาดห้องพัก คนละ 100 บาท</li>
                                    <li className="mb-2">- ค่าทำความสะอาดห้องพัก คนละ 100 บาท (แบบเหมาห้อง)</li>
                                    <h5 className="mt-4 text-center text-red"><strong>สรุปค่าใช้จ่ายต่อเทอมในการเข้าพัก</strong> </h5>
                                    <li className="mb-2"><strong>สำหรับเข้าพักใหม่ (แรกเข้า)</strong></li>
                                    <li className="mb-2">- 5,100 บาท/คน/เดือน</li>
                                    <li className="mb-2">- 7,600 บาท/คน/เดือน (แบบเหมาห้อง)</li>
                                    <li className="mb-2"><strong>สำหรับเดือนถัดไป</strong></li>
                                    <li className="mb-2">- 2,500 บาท/คน/เดือน พร้อมค่าไฟฟ้าและค่าน้ำประปาตามมิเตอร์</li>
                                    <li className="mb-2">- 5,000 บาท/คน/เดือน (แบบเหมาห้อง) พร้อมค่าไฟฟ้าและค่าน้ำประปาตามมิเตอร์</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow mb-4">
                            <div className="card-body p-5">
                                <h4 className="mb-4 text-purple "><strong>หอพักนักศึกษาชายอาคาร 3</strong></h4>
                                <ul className="list-unstyled">
                                    <h6 className="mb-2 "><strong>ค่าบำรุงหอพักนักศึกษา</strong> </h6>
                                    <li className="mb-2">- ภาคเรียนปกติ คนละ 1,200 บาท/เทอม</li>
                                    <li className="mb-2">- ภาคเรียนฤดูร้อน คนละ 600 บาท/เทอม</li>
                                    <h6 className="mb-2"><strong>ค่าสาธารณูปโภค</strong> </h6>
                                    <li className="mb-2">- ภาคเรียนปกติ คนละ 1,000 บาท/เทอม</li>
                                    <li className="mb-2">- ภาคเรียนฤดูร้อน คนละ 400 บาท/เทอม</li>
                                    <h6 className="mb-2"><strong>ค่าประกันของเสียหาย</strong> </h6>
                                    <li className="mb-2">- คนละ 100 บาท ต่อ/เทอม</li>
                                    <h6 className="mb-2"><strong>ค่าทำความสะอาด</strong> </h6>
                                    <li className="mb-2">- นักศึกษาจ่ายค่าทำความสะอาด 100 บาท/ปีการศึกษา</li>
                                    <h5 className="mt-4 text-center text-red"><strong>สรุปค่าใช้จ่ายต่อเทอมในการเข้าพัก</strong> </h5>
                                    <li className="mb-2"><strong>สำหรับเข้าพักใหม่ (แรกเข้า)</strong></li>
                                    <li className="mb-2">- 2,400 บาท/เทอม</li>
                                    <li className="mb-2"><strong>สำหรับเดือนถัดไป</strong></li>
                                    <li className="mb-2">- 2,200 บาท/เทอม</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            < Footer />
        </>
    );
}
