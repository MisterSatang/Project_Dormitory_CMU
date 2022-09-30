import Slidebar from './Slidebar';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

export default function Add_building() {

    const [buil, setBuil] = useState('');
    const [tell, setTell] = useState('');
    const [numBuil, setNumBuil] = useState('');
    const [sex, setSex] = useState('');
    const [floor, setFloor] = useState('');

    const postDormitories = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/dormitories", {
            "buildingNo": Number.parseInt(numBuil),
            "floor": Number.parseInt(floor),
            "sex": sex,
            "name": buil,
            "tel": Number.parseInt(tell)
        })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }
    // e.target.sex.value e.target.number.value

    // const SubmitHandler = (event) => {
    //     event.preventDefault();
    //     axios.post("http://localhost:8000/products/", {
    //         title: event.target.productName.value,
    //         category: {
    //             categoryID: 1,
    //             caregoryName: "Car",
    //         },
    //         detail: event.target.productDetail.value,
    //         currentBid: event.target.startPrice.value,
    //         buyNow: event.target.finalPrice.value,
    //         bitAmount: 0,
    //         countDown: event.target.addTime.value,
    //         owner: 0,
    //         winnerBid: 0,
    //     }).then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    return (
        <>
            <from onSubmit={postDormitories}>
                <div className='container-fluid p-0 bg-lights'>
                    <div className='row'>
                        <Slidebar />
                        <div className='col-9 d-flex justify-content-center'>
                            <div className="row ms-3">
                                <div className="col-11 text-center m-4"><h4>เพิ่มอาคารหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</h4></div>
                                <div className="col-2"></div>
                                <div className="col-8 text-start">
                                    <div className="col-10 ">
                                        <div className="mb-3">
                                            <label className="form-label">ชื่ออาคาร</label>
                                            <input className="form-control" type="text" id='' onChange={(e) => setBuil(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">เบอร์โทร</label>
                                            <input type="text" className="form-control" onChange={(e) => setTell(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">เลขตึก</label>
                                            <input className="form-control" type="text" placeholder="เช่น 1" aria-label="default input example" onChange={(e) => setNumBuil(e.target.value)} />
                                        </div>

                                        <label className="form-label">จำนวนชั้น</label>
                                        <select className="mb-4 form-select" aria-label="Default select example" id="numberF loor" onChange={(e) => setFloor(e.target.value)}>
                                            <option value="" id="">-</option>
                                            <option value="1" id="1">1</option>
                                            <option value="2" id="2">2</option>
                                            <option value="3" id="3">3</option>
                                            <option value="4" id="4">4</option>
                                        </select>

                                        <label className="form-label">ประเภทหอพัก</label>
                                        <select className="mb-4 form-select" aria-label="Default select example" id="sex" onChange={(e) => setSex(e.target.value)}>
                                            <option value="" id="">-</option>
                                            <option value="male" id="man">หอพักชาย</option>
                                            <option value="female" id="woman">หอพักหญิง</option>
                                        </select>
                                        <button type="submit" className="text-center btn btn-primary mt-4" onClick={postDormitories} >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-1" />

                </div>
            </from>
        </>
    );
}