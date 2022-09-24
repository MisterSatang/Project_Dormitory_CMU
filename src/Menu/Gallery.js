import React from 'react';
import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function Gallery() {
    return (
        <>
            < Navbar />
            <div className='col-12 p-0 m-0'>
                <div class="flow row col-12 mg101">
                    <h1>รูปภาพหอพักนักศึกษามหาวิทยาลัยเชียงใหม่</h1>
                    <p>หอพักนักศึกษาหญิง อาคาร 1 </p>
                </div>
                <div className="team col-12">
                    <ul className=" auto-grid" role="list">
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">01</h2>
                                <p >Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/2.jpg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">02</h2>
                                <p>Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/7.jpg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">03</h2>
                                <p>Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/4.jpg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">04</h2>
                                <p>Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/5.jpg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">05</h2>
                                <p>Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/6.jpg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://swop.link/cool" target="_blank&quot;" className="profile">
                                <h2 className="profile__name">06</h2>
                                <p>Founder</p>
                                <img alt="Anita Simmons" src="img_dormitory/Female/F_dormitory1/6.jpg" />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            < Footer />
        </>
    );
}
