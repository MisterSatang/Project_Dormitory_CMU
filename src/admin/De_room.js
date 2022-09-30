import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function De_building() {
    const [builID, setBuilID] = useState('');
    const [roomNum, setRoomNum] = useState('');

    const [dormitories, setDormitories] = useState([]);

    useEffect(() => {
        async function getdormitories() {
            try {
                const result = await axios.get('http://localhost:8000/dormitories');
                console.log(result.data)
                setDormitories(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getdormitories();
    }, []);

    const DeleteRoom = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/rooms/${builID}?roomNo=${roomNum}`)
            .then((response) => {
                console.log(response);
                alert("Delete success");
                setBuilID(null);
            }).catch((error) => {
                console.log(error);
                alert("Delete success");
            })
    }

    return (
        <>
            <from onSubmit={DeleteRoom}>
                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div class="row ms-3">
                                <div class="col-11 text-center m-4"><h4>ลบห้องพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                                <div class="col-2"></div>
                                <div class="col-8 text-start">
                                    <div classname="col-10 ">
                                        <label className="form-label">หอที่ต้องการลบ</label>
                                        <select className="mb-4 form-select" aria-label="เลือกอาคาร" onChange={(e) => setBuilID(e.target.value)}>
                                            <option value="" id="">-</option>
                                            {
                                                dormitories.map(filteredDormitory => (
                                                    <option key={filteredDormitory.id} value={filteredDormitory.id} id={filteredDormitory.id}>
                                                        {filteredDormitory.name}
                                                    </option>
                                                ))}
                                        </select>

                                        <label className="form-label">ห้องที่ต้องการลบ</label>
                                        <input class="form-control" type="text" placeholder="ห้องที่ต้องการลบ เช่น 201" aria-label="default input example" onChange={(e) => setRoomNum(e.target.value)} />

                                        {/* <div className="mb-3">
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
                                    </select> */}

                                        <button type="submit" className="text-center btn btn-primary mt-4" onClick={DeleteRoom}>Delete</button>


                                    </div>
                                </div>
                            </div></div>
                    </div>
                </div>


                <div classname="row ">
                    <div classname="col-1" />

                </div>
            </from>
        </>
    );
}