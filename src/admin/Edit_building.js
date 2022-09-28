import Slidebar from './Slidebar';


import React from 'react';
export default function Edit_building() {
    return (
        <>
            <div className='container-fluid p-0 bg-lights'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-6'>
                        <div class="row ms-3">
                            <div class="col-11 text-center m-4"><h4>แก้ไขอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div class="col-2"></div>
                            <div class="col-8 text-start">
                                <div classname="col-10 ">
                                    <label className="form-label">อาคารที่ต้องการแก้ไข</label>
                                    <select className="mb-4 form-select" aria-label="เลือกอาคาร">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <button type="submit" className="text-center btn btn-primary mt-3 mb-4">Submit</button>
                                    <div className="mb-3 border-top border-4 pt-4">
                                        <label className="form-label">แก้ไขเลขห้อง</label>
                                        <input class="form-control" type="text" placeholder="เช่น 105" aria-label="default input example" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">แก้ไขจำนวนเตียง</label>
                                        <input class="form-control" type="text" aria-label="default input example" />
                                    </div>
                                    <button type="submit" className="text-center btn btn-primary mt-3">Submit</button>
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