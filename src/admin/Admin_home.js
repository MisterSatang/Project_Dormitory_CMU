import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin_home() {
    const [switchReserve, setSwitchReserve] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function getSwitch() {
            try {
                const statusSwitch = await axios.get('http://localhost:8000/adminSettings')
                setSwitchReserve(statusSwitch.data)
            }
            catch (error) {
                console.error(error);
            }
        }
        getSwitch();
    }, [status])

    // const onChange = (e) => {
    //     console.log("onChange" + switchReserve);
    //     // if (switchReserve) {
    //     //     switchReserve = false
    //     // } else {
    //     //     switchReserve = true;
    //     // }

    //     // axios.put(`http://localhost:8000/adminSettings`, {
    //     //     // "disableReserve": switchReserve
    //     // })
    //     //     .then((response) => {
    //     //         console.log(response);
    //     //         alert("Edit success");
    //     //         window.location.reload();
    //     //     }).catch((error) => {
    //     //         console.log(error);
    //     //         alert("Edit fail");
    //     //     })
    // }
    function test() {
        if (switchReserve.disableReserve) {
            axios.put(`http://localhost:8000/adminSettings`, {
                disableReserve: false,
            }).then(() => {
                setStatus(switchReserve)
            })
        } else {
            axios.put(`http://localhost:8000/adminSettings`, {
                disableReserve: true,
            }).then(() => {
                setStatus(switchReserve)
            })
        }
        console.log("result = " + switchReserve.disableReserve);
    }

    // console.log(switchReserve);

    return (
        <>
            <div className='container-fluid p-0 bg-admin'>
                <div className='row'>
                    <Slidebar />
                    <div className='bg-lights col'>
                        <div className="row h-100vh col-12 justify-content-center">
                            <div className=" col-12 me-4 mb-4 d-flex justify-content-center align-items-end">
                                <img src="https://www.cmu.ac.th/content/Article/2019/3dc04451-5e46-473d-9a58-4d02a893859d/2a928522-706c-453f-9e78-98a90945ef91.png" className='h_admin' />
                            </div>
                            <div className="text-color col-12  justify-content-center ">
                                <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                                    <h3><strong>ยินดีต้อนรับเข้าสู่ระบบ Admin Dormitory CMU</strong></h3>
                                </div>
                                <div className="col-12 d-flex justify-content-center ">
                                    <div className="col-5 d-flex justify-content-center ">
                                        <select class="form-select mb-3 " aria-label="Default select example">
                                            <option>ระบบเปิดปิดการจองหอพัก</option><option>เปิดการจอง</option><option>ปิดการจอง</option>
                                        </select>
                                    </div>
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