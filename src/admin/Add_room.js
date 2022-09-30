import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Add_room() {
    const [numroom, setNunroom] = useState('');
    const [people, setPeople] = useState('');
    const [floor, setFloor] = useState('');
    const [builID, setBuilID] = useState('');

    const [dormitories, setDormitories] = useState([]);
    const [post, setPost] = useState([]);

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
    }, [post]);

    const postRoom = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/rooms/${builID}`, {
            "floor": Number.parseInt(floor),
            "roomNo": numroom,
            "numMax": Number.parseInt(people),
            "numStudent": 0
        })
            .then((response) => {
                console.log(response);
                setPost(dormitories);
                alert("Post success");
            }).catch((error) => {
                console.log(error);
                alert("Post fail");
            })
    }

    return (
        <>
            <from onSubmit={postRoom}>

                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div class="row ms-3">
                                <div class="col-11 text-center m-4"><h4>เพิ่มห้องพักหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                                <div class="col-2"></div>
                                <div class="col-8 text-start">
                                    <div classname="col-10 ">
                                        <label className="form-label">อาคารที่ต้องการเพิ่มห้อง</label>
                                        <select className="mb-4 form-select" aria-label="เลือกอาคาร" onChange={(e) => setBuilID(e.target.value)}>
                                            <option value="" id="">-</option>
                                            {
                                                dormitories.map(filteredDormitory => (
                                                    <option key={filteredDormitory.id} value={filteredDormitory.id} id={filteredDormitory.id}>
                                                        {filteredDormitory.name}
                                                    </option>
                                                ))}
                                        </select>

                                        <label className="form-label">ชั้นที่</label>
                                        <select className="mb-4 form-select" aria-label="Default select example" id="numberF loor" onChange={(e) => setFloor(e.target.value)}>
                                            <option value="" id="">-</option>
                                            <option value="1" id="1">1</option>
                                            <option value="2" id="2">2</option>
                                            <option value="3" id="3">3</option>
                                            <option value="4" id="4">4</option>
                                        </select>
                                        <div className="mb-3">
                                            <label className="form-label">เลขห้อง</label>
                                            <input class="form-control" type="text" placeholder="เช่น 125" aria-label="default input example" onChange={(e) => setNunroom(e.target.value)} />
                                        </div>
                                        <label className="form-label">จำนวนคน</label>
                                        <select className="mb-4 form-select" aria-label="Default select example" id="numberF loor" onChange={(e) => setPeople(e.target.value)}>
                                            <option value="" id="">-</option>
                                            <option value="1" id="1">1</option>
                                            <option value="2" id="2">2</option>
                                            <option value="3" id="3">3</option>
                                            <option value="4" id="4">4</option>
                                        </select>

                                        <button type="submit" className="text-center btn btn-primary mt-4" onClick={postRoom}>Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div classname="row ">
                        <div classname="col-1" />

                    </div>
                </div>
            </from>
        </>
    );
}