import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                {/* photo */}
                <div id="" class="pb-4 p-0 m-0 container-fluid ">
                    <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" className="w-100 hight-top-photo"></img>
                </div>
            </div>
            <div className="container-fluid p-0 m-0 pt-4 ">
                <div className="row mb-4">
                    <div className="col-1"></div>

                    <div className="col-10">
                        <div className="mb-4 alert-trim rounded p-2 fs-3 new-text-color ">ติดตามข่าวสาร</div>
                        <div className="row justify-content-center">
                            {/* //TODO card */}
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4 ">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">14</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">กันยายน</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/cmu3.jpg" className="rounded card-news" alt="card-news" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศสำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การรับสมัครนักศึกษาเข้าร่วมโครงการทุนทำดี ฟรีค่าหอ ประจำภาคเรียนที่ 2 ปีการศึกษา 2565
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">7</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">กันยายน</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news1.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศสำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การรับสมัครนักศึกษาเข้าร่วมโครงการทุนทำดี ฟรีค่าหอ ประจำภาคเรียนที่ 2 ปีการศึกษา 2565
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">4</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">มิถุนายน</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news2.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การคืนเงินค่าบำรุงหอพักร้อยละ 10
                                            สำหรับนักศึกษาที่พักในหอพักนักศึกษา ประจำภาคการศึกษาที่ 3 ปีการศึกษา 2564 กรณี
                                            นักศึกษายื่นคำขอ ในภายวันที่ 10มิถุนายน 2565
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">5</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">พฤษภาคม</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news3.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การเปลี่ยนแปลงวันรายงานตัวเข้าหอพักนักศึกษา ประจำภาคเรียนที่ 1 ปีการศึกษา 2565
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">10</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">พฤษภาคม</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news4.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศ มหาวิทยาลัยเชียงใหม่ เรื่อง การเปลี่ยนแปลงวันรับสมัครนักศึกษาชั้นปีที่ 1 เข้าพักในหอพักนักศึกษาของมหาวิทยาลัยเชียงใหม่
                                            TCAS รอบที่ 2 แบบที่ 2 โควตา Quota ประจำภาคเรียนที่ 1 ปีการศึกษา 2565
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">9</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">พฤษภาคม</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news5.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดปิดหอพักนักศึกษา ประจำภาคเรียนฤดูร้อน ปีการศึกษา 2564
                                            และกำหนดเปิดหอพักนักศึกษา ประจำภาคเรียนที่ 1 ปีการศึกษา 2565
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12 my-4">
                                <div class="container-fluid bg-light p-4 rounded-4 shadow h-100">
                                    <div class="row align-items-center pb-3">
                                        <div class="col-4">
                                            <div className="fs-1 d-flex-fit text-center align-items-center new-text-color-p text-center text-center ">29</div>
                                            <div className="fs-5 d-flex-fit text-center align-items-center new-text-color text-center">เมษายน</div>
                                        </div>
                                        <div class="col">
                                            <img src="img_dormitory/News/news6.jpg" className="rounded card-news" alt="..." />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className='container-fluid fs-6 new-text-color text-justify'>
                                            ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การรับสมัครนักศึกษาเข้าพักในหอพักนักศึกษาหญิง อาคาร 10 (หอพัก 40 ปี) ประจำภาคเรียนที่ 1 ปีการศึกษา 2565 (เพิ่มเติม)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //TODO end-cards */}

                        </div>
                    </div>

                    <div className="col-1"></div>
                </div>

            </div >

            <div className="container-fluid p-0 m-0 pt-4 ">
                <div className="row mb-4">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="mb-1 alert-trim rounded p-2 fs-3 new-text-color ">การรับสมัครเข้าหอพักนักศึกษา</div>
                        {/* cardlink */}
                        <div className='align-items-center row justify-content-center'>
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 '>
                                <div className='col-3 justify-content-center'>
                                    <div className='justify-content-center '>
                                        <div className="bi bi-cash-coin m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center '>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-payment'>กำหนดการชำระเงินภาคเรียนที่ 1 ปีการศึกษา 2565</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row  bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='justify-content-center '>
                                        <div className="bi bi-building m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center '>
                                    <a className='h-news new-text-color-p' href='https://www.facebook.com/newdormcmu'>ดูข้อมูลหรือติดต่อหอพักนักศึกษาชายอาคาร 1,2 และหอพักนักศึกษาหญิงอาคาร 11,12 (หอพักสร้างขึ้นใหม่)</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row  bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='justify-content-center align-items-center'>
                                        <div className="bi bi-book m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/event/learning/'>ระบบเรียนรู้เกี่ยวกับหอพักนักศึกษา มช (E - Learning Dormitory of Chiang Mai University)</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row  bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='justify-content-center align-items-center'>
                                        <div className="bi bi-key m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/key_of_dorm/'>กุญแจเด็กหอในออนไลน์</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-pen m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-movecivilregis'>การแจ้งย้ายทะเบียนราษฎร์</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-file-ppt m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://resident.mis.cmu.ac.th/'>ระบบทะเบียนราษฎร์ผู้พักอาศัยในหอพักมหาวิทยาลัยเชียงใหม่</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-cash m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <Link to="/Price" className='h-news new-text-color-p'>ค่าใช้จ่ายในการเข้าพัก</Link>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-people m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/dorm-dormitory'>บริการและสวัสดิการ</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-person-circle m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <Link to="" className='h-news new-text-color-p'>การรายงานตัวเข้าหอพัก</Link>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-layout-text-sidebar m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-receipts'>ใบรับมอบสิ่งของ</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-map m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-mapdorm'>แผนที่หอพักนักศึกษามหาวิทยาลัยเชียงใหม่</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-chat-square-dots m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-qa'>Q and A</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row bg-light pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-globe m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='new-text-color-p h-news' href='https://udo.oop.cmu.ac.th/files/International_Students_Accommodation_Information.pdf'>International Students Accommodation Information</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}