import Slidebar from './Slidebar';


import React from 'react';
export default function Edit_room() {
    return (
        <>
            <div className='container-fluid p-0 bg-lights'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-9 d-flex justify-content-center'>
                        <div className="row ms-3">
                            <div className="col-11 text-center m-4"><h4>แก้ไขห้องพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div className="col-2"></div>
                            <div className="col-8 text-start">
                                <div className="col-10 ">
                                    <label className="form-label">อาคารที่ต้องการแก้ไข</label>
                                    <select className="mb-4 form-select" aria-label="เลือกอาคาร">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <div className="mb-3">
                                        <label className="form-label">เลขห้องที่ต้องการแก้ไข</label>
                                        <input className="form-control " type="text" placeholder="เช่น 105" aria-label="default input example" />
                                    </div>
                                    <button type="submit" className="text-center btn btn-primary mt-3 mb-4">Submit</button>
                                    <div className="mb-3 border-top border-4 pt-4">
                                        <label className="form-label">แก้ไขเลขห้อง</label>
                                        <input className="form-control" type="text" placeholder="เช่น 1" aria-label="default input example" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">แก้ไขจำนวนเตียง</label>
                                        <input className="form-control" type="text" aria-label="default input example" />
                                    </div>
                                    <button type="submit" className="text-center btn btn-primary mt-3">Submit</button>

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