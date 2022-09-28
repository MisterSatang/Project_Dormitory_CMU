import Slidebar from './Slidebar';


import React from 'react';
export default function Add_building() {
    return (
        <>
            <div className='container-fluid p-0 bg-admin'>
                <div className='row'>
                    <Slidebar />
                    <div className='bg-primary col-10'>
                            <div class="col-12">
                                <div  className="m-3 d-flex justify-content-center align-items-center">
                                <img src="https://www.cmu.ac.th/content/images/logo_footer.png" alt width={400} /></div>
                                <div class="text-color col-12 text-center m-4"><h4><strong>ยินดีต้อนรับเข้าสู่ระบบ Admin Dormitory CMU</strong></h4></div>
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