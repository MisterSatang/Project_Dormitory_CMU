import Slidebar from './Slidebar';

import React from 'react';
export default function Admin_home() {
    return (
        <>
            <div className='container-fluid p-0 bg-admin'>
                <div className='row'>
                    <Slidebar />
                    <div className='bg-lights col'>
                        <div className="row h-100vh col-12 justify-">
                            <div className=" col-12 me-4 mb-4 d-flex justify-content-center align-items-end">
                                <img src="https://www.cmu.ac.th/content/Article/2019/3dc04451-5e46-473d-9a58-4d02a893859d/2a928522-706c-453f-9e78-98a90945ef91.png" className='h_admin' />
                            </div>
                            <div className="text-color col-12  justify-content-center align-items-end ">
                                <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                                    <h3><strong>ยินดีต้อนรับเข้าสู่ระบบ Admin Dormitory CMU</strong></h3>
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <input type="checkbox" id="switch" /><label className='bt me-2' for="switch"></label>
                                    <div >
                                        <h6>ระบบเปิดปิดการจอง</h6>
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