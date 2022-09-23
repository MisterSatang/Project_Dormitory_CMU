import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function App() {
    return (
        <>
            < Navbar />
            <div className="container-fluid p-0 m-0 bg-map">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-10">
                        <div className="d-flex h-contain-map justify-content-center p-4 marjin15 ">
                            <div className="d-flex bg-white shadow rounded-4 p-4 ">
                                <img src="img_dormitory/Map/map_dorm.jpg" className="contain-map photo-map col-12 d-flex " />
                        <div className="d-flex  justify-content-center p-4 marjin15">
                            <div className="d-flex bg-white shadow rounded-4 p-4 ">
                                <img src="img_dormitory/Map/map_dorm.jpg" className="contain-map h-contain-map" />
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            < Footer />
        </>
    );
}