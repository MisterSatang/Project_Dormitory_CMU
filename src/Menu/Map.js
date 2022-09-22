import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function App() {
    return (
        <>
            < Navbar />
            {/* <div className="h-100">
                <div className="h-100">
                    <div className="row h-100 align-items-center pt-5">
                        <div className="col-12 text-center pt-5">
                            <h1 className="fw-light text-white ">แผนที่หอพักนักศึกษามหาวิทยาลัยเชียงใหม่</h1>
                        </div>
                    </div>
                </div>

                <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" className="w-100 image-containner" />
                <div className='position-relative'>
                    <div className="container mb-5 p-4 bg-white rounded-4 shadow position-absolute top-0 start-50 translate-middle">
                        <div className="d-flex text-center align-items-center ">
                            <img src="img_dormitory/Map/map_dorm.jpg" className="d-block w-100 " />
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="container-fluid p-0 m-0">
                <div class="d-flex">
                    <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" className="image-containner" />
                </div>
            </div>

            <div class="container-fluid p-0 m-0">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-10">
                        <div class="d-flex h-contain-map ">
                            <div class="d-flex bg-white shadow rounded-4 container-fluid p-4">
                                <img src="img_dormitory/Map/map_dorm.jpg" className="contain-map photo-map" />
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

            < Footer />
        </>
    );
}