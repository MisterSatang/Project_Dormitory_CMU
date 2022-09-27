import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import Container from '../Component/Container';
export default function App() {
    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                {/* photo */}
                <div id="" class="pb-4 p-0 m-0 container-fluid">
                    <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" className="w-100 hight-news"></img>
                </div>
            </div>
            <div className="container-fluid p-0 m-0 pt-4 ">
                <div className="row mb-4">
                    <div className="col-1"></div>

                    <div className="col-10 ">
                        <div className="mb-4 alert-trim rounded p-2 fs-3 new-text-color ">ติดตามข่าวสาร</div>
                        <div className="row justify-content-center">

                            {/* card 1*/}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 ">
                                <div className="row align-items-center hight-news mb-4">
                                    <div className="col-4">
                                        <div className="fs-1 container-fluid new-text-color-p text-center text-center">14</div>
                                        <div className="fs-5 container-fluid new-text-color text-center">กันยายน</div>
                                    </div>
                                    <div className="col-8 justify-content-center mb-3">
                                        <div className="col-12 container-fluid ">
                                            <img src="img_dormitory/News/cmu3.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 row">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดปิดหอพักนักศึกษา ภาคการศึกษาที่ 1 ปีการศึกษา 2565 และกำหนดเปิดหอพักนักศึกษา ภาคการศึกษาที่ 2 ปีการศึกษา 2565
                                    </div>
                                </div>
                            </div>

                            {/* card 2*/}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 ">
                                <div className="row align-items-center hight-news mb-4">
                                    <div className="col-4">
                                        <div className="fs-1 container-fluid new-text-color-p text-center text-center">7</div>
                                        <div className="fs-5 container-fluid new-text-color text-center">กันยายน</div>
                                    </div>
                                    <div className="col-8 justify-content-center mb-3">
                                        <div className="col-12 container-fluid ">
                                            <img src="img_dormitory/News/news22.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 row">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศสำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การรับสมัครนักศึกษาเข้าร่วมโครงการทุนทำดี ฟรีค่าหอ ประจำภาคเรียนที่ 2 ปีการศึกษา 2565
                                    </div>
                                </div>
                            </div>

                            {/* card 3*/}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 ">
                                <div className="row align-items-center hight-news mb-4">
                                    <div className="col-4">
                                        <div className="fs-1 container-fluid new-text-color-p text-center text-center">4</div>
                                        <div className="fs-5 container-fluid new-text-color text-center">พฤษภาคม</div>
                                    </div>
                                    <div className="col-8 justify-content-center mb-3">
                                        <div className="col-12 container-fluid ">
                                            <img src="img_dormitory/News/news23.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 row">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การคืนเงินค่าบำรุงหอพักร้อยละ 10
                                        สำหรับนักศึกษาที่พักอาศัยในหอพักนักศึกษา ประจำภาคการศึกษาที่ 3 ปีการศึกษา 2564 กรณี
                                        นักศึกษายื่นคำขอ ในระหว่างวันที่ 10 พฤษภาคม - 3 มิถุนายน 2565 และเพิ่มเติมจนถึงวันที่ 24 มิถุนายน 2565
                                    </div>
                                </div>
                            </div>

                            {/* card 4*/}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 ">
                                <div className="row align-items-center hight-news mb-4">
                                    <div className="col-4">
                                        <div className="fs-1 container-fluid new-text-color-p text-center text-center">2</div>
                                        <div className="fs-5 container-fluid new-text-color text-center">พฤษภาคม</div>
                                    </div>
                                    <div className="col-8 justify-content-center mb-3">
                                        <div className="col-12 container-fluid ">
                                            <img src="img_dormitory/News/news24.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 row">
                                    <div className='container-fluid fs-6 new-text-color text-justify d-flex align-items-start'>
                                        ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง มาตรการในการดูแลนักศึกษาที่พักในหอพักนักศึกษา
                                    </div>
                                </div>
                            </div>

                            {/* card */}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 align-items-center">
                                <div className="col-4">
                                    <div className="fs-1 container-fluid new-text-color-p text-center text-center">7</div>
                                    <div className="fs-5 container-fluid new-text-color text-center">กันยายน</div>
                                </div>

                                <div className="col-8 justify-content-center mb-3">
                                    <div className="col-12 container-fluid ">
                                        <img src="img_dormitory/News/news22.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศสำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การรับสมัครนักศึกษาเข้าร่วมโครงการทุนทำดี ฟรีค่าหอ ประจำภาคเรียนที่ 2 ปีการศึกษา 2565
                                    </div>
                                </div>
                            </div>

                            {/* card */}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 align-items-center">
                                <div className="col-4">
                                    <div className="fs-1 container-fluid new-text-color-p text-center text-center">4</div>
                                    <div className="fs-5 container-fluid new-text-color text-center">กรกฎาคม</div>
                                </div>

                                <div className="col-8 justify-content-center mb-3">
                                    <div className="col-12 container-fluid ">
                                        <img src="img_dormitory/News/news23.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง การคืนเงินค่าบำรุงหอพักร้อยละ 10
                                        สำหรับนักศึกษาที่พักอาศัยในหอพักนักศึกษา ประจำภาคการศึกษาที่ 3 ปีการศึกษา 2564 กรณี
                                        นักศึกษายื่นคำขอ ในระหว่างวันที่ 10 พฤษภาคม - 3 มิถุนายน 2565 และเพิ่มเติมจนถึงวันที่ 24 มิถุนายน 2565
                                    </div>
                                </div>
                            </div>

                            {/* card */}
                            <div className="row m-4 new-color pt-4 pb-4 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 align-items-center">
                                <div className="col-4 ">
                                    <div className="fs-1 container-fluid new-text-color-p text-center text-center">2</div>
                                    <div className="fs-5 container-fluid new-text-color text-center">พฤษภาคม</div>
                                </div>

                                <div className="col-8 justify-content-center mb-3 ">
                                    <div className="col-12 container-fluid ">
                                        <img src="img_dormitory/News/news24.jpg" className="d-block w-100 rounded hight-news" alt="..." />
                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className='container-fluid fs-6 new-text-color text-justify'>
                                        ประกาศ สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่ เรื่อง มาตรการในการดูแลนักศึกษาที่พักในหอพักนักศึกษา
                                    </div>
                                </div>

                            </div>

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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5 '>
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
                            <div className='align-items-center row  new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row  new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row  new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-cash m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-expenses'>ค่าใช้จ่ายในการเข้าพัก</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
                                <div className='col-3 justify-content-center'>
                                    <div className='  justify-content-center align-items-center'>
                                        <div className="bi bi-person-circle m-1 fs-1 "></div>
                                    </div>
                                </div>
                                <div className='col-9 justify-content-center'>
                                    <a className='h-news new-text-color-p' href='https://udo.oop.cmu.ac.th/page-reporting'>การรายงานตัวเข้าหอพัก</a>
                                </div>
                            </div>
                            {/* cardlink */}
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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
                            <div className='align-items-center row new-color pt-2 pb-2 m-3 new-br new-shdow justify-content-center col-12 col-md-5 col-lg-5 col-xl-5'>
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