import React from 'react';
export default function Admin() {
    return (
        <>
            <div className="sidebar">
                <img src='https://upload.wikimedia.org/wikipedia/th/thumb/d/db/Chiang_Mai_University.svg/800px-Chiang_Mai_University.svg.png'  alt width={100} className="m-3"></img>
                <a className="active" href="#home">จัดการการจอง</a>
                <p className='m-2'>จัดการอาคาร</p>
                <a href="#news">เพิ่มอาคาร</a>
                <a href="#contact">อัพเดทข้อมูลอาคาร</a>
                <a href="#about">ลบอาคาร</a>
                <p className='m-2'>จัดการห้อง</p>
                <a href="#news">เพิ่มห้อง</a>
                <a href="#contact">อัพเดทข้อมูลห้อง</a>
                <a href="#about">ลบห้อง</a>
            </div>

            <div className="content">
                
            </div>

        </>
    );
}