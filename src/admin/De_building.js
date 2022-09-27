import Slidebar from './Slidebar';


import React from 'react';
export default function De_building() {
    return (
        <>
            <div className='container-fluid p-0'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-6'>
                        <div class="row ms-3">
                            <div class="col-11 text-center m-4"><h4>ลบอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div class="col-2"></div>
                            <div class="col-8 text-start">
                                <div classname="col-10 ">
                                    <label className="form-label">อาคารที่ต้องการลบ</label>
                                    <select className="mb-4 form-select" aria-label="เลือกอาคาร">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
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
                                        <input class="form-control" type="text" placeholder="เช่น 108" aria-label="default input example" />
                                    </div>

                                    <label className="form-label">ประเภทหอพัก</label>
                                    <select className="mb-4 form-select" aria-label="Default select example">
                                        <option value="1">หอพักชาย</option>
                                        <option value="2">หอพักหญิง</option>
                                    </select>

                                    <button type="submit" className="text-center btn btn-primary mt-4">Delete</button>


                                </div>
                            </div>
                        </div></div>
                </div>
            </div>


            <div classname="row ">
                <div classname="col-1" />

            </div>
        </>
    );
}