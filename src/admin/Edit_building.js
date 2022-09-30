import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Edit_building() {
    const [builID, setBuilID] = useState('');
    const [buil, setBuil] = useState('');
    const [tell, setTell] = useState('');
    const [numBuil, setNumBuil] = useState('');
    const [sex, setSex] = useState('');

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

    const editBuilding = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/dormitories/${builID}`, {
            "buildingNo": Number.parseInt(numBuil),
            "sex": sex,
            "name": buil,
            "tel": Number.parseInt(tell)
        })
            .then((response) => {
                console.log(response);
                alert("Edit success");
            }).catch((error) => {
                console.log(error);
                alert("Edit fail");
            })
    }

    return (
        <>
            <from onSubmit={editBuilding}>
                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div class="row">
                                <div class="col-11 text-center m-4"><h4>แก้ไขอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                                <div class="col-2"></div>
                                <div class="col-8 text-start">
                                    <div classname="col-10 ">
                                        <label className="form-label">อาคารที่ต้องการแก้ไข</label>
                                        <select className="mb-4 form-select" aria-label="เลือกอาคาร" onChange={(e) => setBuilID(e.target.value)}>
                                            <option value="" id="">-</option>
                                            {
                                                dormitories.map(filteredDormitory => (
                                                    <option key={filteredDormitory.id} value={filteredDormitory.id} id={filteredDormitory.id}>
                                                        {filteredDormitory.name}
                                                    </option>
                                                ))}
                                        </select>
                                        <div className="mb-3 border-top border-4 pt-4" >
                                            <label className="form-label">ชื่ออาคาร</label>
                                            <input class="form-control" type="text" placeholder="เช่น หอเก้า" aria-label="default input example" onChange={(e) => setBuil(e.target.value)} />
                                        </div>
                                        <div className="mb-3 border-top border-4 pt-4" >
                                            <label className="form-label">เลขตึก</label>
                                            <input class="form-control" type="text" placeholder="เช่น 105" aria-label="default input example" onChange={(e) => setNumBuil(e.target.value)} />
                                        </div>
                                        <label className="form-label">ประเภทหอพัก</label>
                                        <select className="mb-4 form-select" aria-label="Default select example" onChange={(e) => setSex(e.target.value)}>
                                            <option value="" id="">-</option>
                                            <option value="male" id="man">หอพักชาย</option>
                                            <option value="female" id="woman">หอพักหญิง</option>
                                        </select>
                                        <div className="mb-3">
                                            <label className="form-label">เบอร์โทร</label>
                                            <input type="text" className="form-control" onChange={(e) => setTell(e.target.value)} />
                                        </div>
                                        <button type="submit" className="text-center btn btn-primary mt-3" onClick={editBuilding}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="row ">
                    <div classname="col-1" />

                </div>
            </from>
        </>
    );
}