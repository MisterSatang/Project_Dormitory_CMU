import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function App() {
  return (
    <>
      < Navbar />
        <div class="d-flex position-relative">
          <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" className="w-100 image-containner" />
        </div>
        <div class="container-fluid content-booking-absolute">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10 p-4 px-5 bg-white shadow rounded-4">
              <div class="row">
                    <div class="text-center fs-4 fw-bold">จองหอพัก นักศึกษามหาลัยเชียงใหม่</div>
              </div>
              <div class="row m-3">
                  <div class="col-5">
                      <div class="d-flex h-2 mb-1">
                        Email Address
                      </div>
                      <input type="text" id="email" class="form-control" placeholder="Email@cmu.ac.th" />
                  </div>
                  <div class="col-5">
                      <div class="d-flex h-2 mb-1">
                        Password
                      </div>
                      <input type="password" id="email" class="form-control" placeholder="Password" />
                  </div>
                  <div class="col-2">
                    <div class="d-flex h-2 mb-1"></div>
                      <button type="button" class="btn btn-primary w-100 rounded-pill">Confirm</button>
                  </div>
              </div>
            </div>
            <div class="col-12"></div>
          </div>
        </div>    
      < Footer />
    </>
  );
}
