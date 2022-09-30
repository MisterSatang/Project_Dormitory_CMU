import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function De_building() {
    const [builID, setBuilID] = useState('');

    const [dormitories, setDormitories] = useState([]);
    const [deleteDormitories, setdeleteDormitories] = useState([]);

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
    }, [deleteDormitories]);

    const DeleteBuil = (e) => {
        axios.delete(`http://localhost:8000/dormitories/${builID}`)
            .then((response) => {
                console.log(response);
                setdeleteDormitories(dormitories)
                alert("Delete success");
                setBuilID(null);
            }).catch((error) => {
                console.log(error);
                alert("Delete fail");
            })
    }

    return (
        <>
            <from onSubmit={DeleteBuil}>
                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div class="row ms-3">
                                <div class="col-11 text-center m-4"><h4>ลบอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                                <div class="col-2"></div>
                                <div class="col-8 text-start">
                                    <div classname="col-10 ">
                                        <label className="form-label">อาคารที่ต้องการลบ</label>
                                        <select className="mb-4 form-select" aria-label="เลือกอาคาร" onChange={(e) => setBuilID(e.target.value)}>
                                            <option value="" id="">-</option>
                                            {
                                                dormitories.map(filteredDormitory => (
                                                    <option key={filteredDormitory.id} value={filteredDormitory.id} id={filteredDormitory.id}>
                                                        {filteredDormitory.name}
                                                    </option>
                                                ))}
                                        </select>

                                        <button type="submit" className="text-center btn btn-primary mt-4" onClick={DeleteBuil}>Delete</button>


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