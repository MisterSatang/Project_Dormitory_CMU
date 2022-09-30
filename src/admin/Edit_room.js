import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Edit_room() {
    const [numroom, setNunroom] = useState('');
    const [people, setPeople] = useState('');

    // const [floor, setfloor] = useState('');
    const [numStudent, setnumStudent] = useState('');

    const [builID, setBuilID] = useState('');
    const [roomID, setRoomID] = useState('');

    const [dormitories, setDormitories] = useState([]);
    useEffect(() => {
        async function getdormitories() {
            try {
                const result = await axios.get('http://localhost:8000/dormitories');
                setDormitories(result.data)
            } catch (error) {
                console.error(error);
            }
        }
        getdormitories();

    }, []);

    const editRoom = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/rooms/${builID}?roomNo=${roomID}`, {
            "roomNo": Number.parseInt(numroom),
            "numMax": Number.parseInt(people),
            // "numStudent": Number.parseInt(numStudent)
        })
            .then((response) => {
                console.log(response);
                alert("Edit success");
                window.location.reload();
            }).catch((error) => {
                console.log(error);
                alert("Edit fail");
            })
    }

    return (
        <>
            <from onSubmit={editRoom}>
                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div class="row ms-3">
                                <div class="col-11 text-center m-4"><h4>แก้ไขห้องพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
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
                                        <div className="mb-3 ">
                                            <label className="form-label">เลขห้องเดิม</label>
                                            <input class="form-control" type="text" placeholder="เช่น 109" aria-label="default input example" onChange={(e) => setRoomID(e.target.value)} />
                                        </div>
                                        <div className="mb-3 ">
                                            <label className="form-label">แก้ไขเลขห้อง</label>
                                            <input class="form-control" type="text" placeholder="เช่น 105" aria-label="default input example" onChange={(e) => setNunroom(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">แก้ไขจำนวนเตียง</label>
                                            <select className="mb-4 form-select" aria-label="Default select example" id="numberF loor" onChange={(e) => setPeople(e.target.value)}>
                                                <option value="" id="">-</option>
                                                <option value="1" id="1">1</option>
                                                <option value="2" id="2">2</option>
                                                <option value="3" id="3">3</option>
                                                <option value="4" id="4">4</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="text-center btn btn-primary mt-3" onClick={editRoom}>Submit</button>

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