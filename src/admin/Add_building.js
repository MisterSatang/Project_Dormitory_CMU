import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Add_building() {
    const [postDor, setpostDor] = useState([]);

    const [buil, setBuil] = useState('');
    const [tell, setTell] = useState('');
    const [numBuil, setNumBuil] = useState('');
    const [sex, setSex] = useState('');

    useEffect(() => {
        function postDormitories() {
            axios.post("http://localhost:8000/dormitories", {
                "buildingNo": numBuil,
                "floor": "",
                "sex": sex,
                "name": buil,
                "tel": tell
            })
                .then((response) => {
                    setpostDor(response.data);
                })
        }
    }, [])

    return (
        <>
            <div className='container-fluid p-0'>
                <div className='row'>
                    <Slidebar />
                    <div className='col-6'>
                        <div class="row ms-3">
                            <div class=" text-color col-11 text-center m-4"><h4>เพิ่มอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                            <div class="col-2"></div>
                            <div class="col-8 text-start">
                                <div classname="col-10 ">
                                    <div className="mb-3">
                                        <label className="form-label">ชื่ออาคาร</label>
                                        <input className="form-control" type="text" onChange={(e) => setBuil(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">เบอร์โทร</label>
                                        <input type="text" className="form-control" onChange={(e) => setTell(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">เลขตึก</label>
                                        <input class="form-control" type="text" placeholder="เช่น 1" aria-label="default input example" onChange={(e) => setNumBuil(e.target.value)} />
                                    </div>

                                    <label className="form-label">ประเภทหอพัก</label>
                                    <select className="mb-4 form-select" aria-label="Default select example">
                                        <option value="1" onClick={(e) => setSex(e.target.value)} id="man">หอพักชาย</option>
                                        <option value="2" onClick={(e) => setSex(e.target.value)} id="woman">หอพักหญิง</option>
                                    </select>
                                    <button type="submit" className="text-center btn btn-primary mt-4" onClick="postDormitories()" >Submit</button>

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