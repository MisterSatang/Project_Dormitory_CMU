import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import Container from '../Component/Container';
export default function App() {
    return (
        <>
            <Navbar />
            <div className="">
                <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" className="w-100 image-containner hight-photo" />
            </div>
            <div className="container-fluid p-0 m-0 bg-light pt-4 ">
                <div className="row mb-4">
                    <div className="col-1"></div>

                    <div className="col-10">
                        <div className="mb-4 alert-trim bg-light rounded p-2 fs-3">ติดตามข่าวสาร</div>
                        <div className="row">
                            {/* card */}
                            <div className="row mb-4 bg-light pt-2 pb-2 rounded shadow">
                                <div className="col-2 ">
                                    <div className="fs-1 container-fluid">99</div>
                                    <div className="fs-5 container-fluid">ธันวาคม</div>
                                </div>
                                <div className="col-7 ">
                                    <div className='container-fluid fs-6'>
                                        Responsive variations also exist for .d-flex
                                        Set the direction of flex items in a flex container with direction utilities. In most cases you can
                                        omit the horizontal class here as the browser default is row.
                                    </div>
                                </div>
                                <div className="col-3 justify-content-center">
                                    <div className="col-8 container-fluid">
                                        <img src="img_dormitory/News/cmu2.jpg" className="d-block w-100 rounded" alt="..." />
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4 bg-light pt-2 pb-2 rounded shadow">
                                <div className="col-2">
                                    <div className="fs-1 container-fluid">วันที่</div>
                                    <div className="fs-5 container-fluid">เดือน</div>
                                </div>
                                <div className="col-7">
                                    <div className='container-fluid'>
                                        Responsive variations also exist for .d-flex
                                        Set the direction of flex items in a flex container with direction utilities. In most cases you can
                                        omit the horizontal class here as the browser default is row.
                                    </div>
                                </div>
                                <div className="col-3 justify-content-center ">
                                    <div className="col-8 container-fluid ">
                                        <img src="img_dormitory/News/cmu3.jpg" className="d-block w-100 rounded" alt="..." />
                                    </div>
                                </div>
                            </div>
                            {/* card */}
                        </div>
                    </div>

                    <div className="col-1"></div>
                </div>

                <div className="row justify-content-center ">
                    <div className="col-1"></div>
                    <div className="mb-4 col-10 ">
                        <div className="alert-trim bg-light rounded p-2 fs-3">รูปภาพหอพัก</div>
                    </div>
                    <div className="col-1"></div>
                    {/* photo */}

                    <div id="carouselExampleIndicators" class="carousel slide col-4 mb-4 p-0" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img_dormitory/News/cmu1.jpg" className="d-block w-100" alt="..." />

                            </div>
                            <div class="carousel-item">
                                <img src="img_dormitory/News/cmu2.jpg" className="d-block w-100" alt="..." />

                            </div>
                            <div class="carousel-item">
                                <img src="img_dormitory/News/cmu3.jpg" className="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* photo */}
                </div>
            </div >
            <Footer />
        </>
    );
}