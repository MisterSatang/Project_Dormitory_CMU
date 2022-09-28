import Slidebar from './Slidebar';


import React from 'react';
export default function Add_building() {
    return (
        <>
            <div className='container-fluid p-0 bg-lights'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-6'>
                        <div class="row ms-3">
                            <div class="col-11 text-center m-4"><h4>เพิ่มอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div class="col-2"></div>
                            <div class="col-8 text-start">
                                <div classname="col-10 ">
                                    <div className="mb-3">
                                        <label className="form-label">ชื่ออาคาร</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">เบอร์โทร</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">เลขตึก</label>
                                        <input class="form-control" type="text" placeholder="เช่น 1" aria-label="default input example" />
                                    </div>
                                    <label className="form-label">จำนวนชั้น</label>
                                    <select className="mb-4 form-select" aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="1">3</option>
                                        <option value="2">4</option>
                                    </select>

                                    <label className="form-label">ประเภทหอพัก</label>
                                    <select className="mb-4 form-select" aria-label="Default select example">
                                        <option value="1">หอพักชาย</option>
                                        <option value="2">หอพักหญิง</option>
                                    </select>
                                    <div>
                                    </div>
                                    <button type="submit" className="text-center btn btn-primary mt-4">Submit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div classname="row ">
                <div classname="col-1" />

            </div>
        </>
    );
}