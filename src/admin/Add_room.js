import Slidebar from './Slidebar';


import React from 'react';
export default function Add_room() {
    return (
        <>
            <div className='container-fluid p-0 bg-admin'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-6'>
                        <div class="row ms-3">
                            <div class="col-11 text-center m-4"><h4>เพิ่มห้องพักหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div class="col-2"></div>
                            <div class="col-8 text-start">
                                <div classname="col-10 ">
                                    <label className="form-label">อาคารที่ต้องการเพิ่มห้อง</label>
                                    <select className="mb-4 form-select" aria-label="เลือกอาคาร">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <div className="mb-3">
                                        <label className="form-label">เลขตึก</label>
                                        <input class="form-control" type="text" placeholder="เช่น 1" aria-label="default input example" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">เลขห้อง</label>
                                        <input class="form-control" type="text" placeholder="เช่น 125" aria-label="default input example" />
                                    </div>

                                    <button type="submit" className="text-center btn btn-primary mt-4">Submit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div classname="row ">
                    <div classname="col-1" />

                </div>
            </div>
        </>
    );
}