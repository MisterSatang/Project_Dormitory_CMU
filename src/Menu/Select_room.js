import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function App() {
  return (
    <>
      < Navbar />
        <div class="d-flex position-relative">
            <img src="img_dormitory/Select_room/10.jpg" alt="Bg-cmu" className="w-100 image-bg-select_room" />
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col"></div>
                    <div class="col-8 m-4 shadow ">
                        <div class="row bg-purple rounded-top-4 p-2 pt-3">
                            <div class="d-flex justify-content-center">
                                <div class="d-flex text-white">ชื่อนาม-สุกล
                                    <div class="ms-2">สตางค์ บุตรสัย</div>
                                </div>
                            </div>
                        </div>
                        <div class="row bg-white ">
                            <div class="col-8">
                                
                            </div>
                            <div class="col">
                                <div class="p-3 ">
                                <div class="d-flex">ชื่อนาม-สุกล
                                <div class="ms-2">สตางค์ บุตรสัย</div>
                                </div>
                                <div class="d-flex">รหัสนักศึกษา
                                <div class="ms-2">642110329</div>
                                </div>
                                <div class="d-flex">คณะ
                                <div class="ms-2">ศิลปะ สื่อ เเละเทคโนโลยี</div>
                                </div>
                                <div class="d-flex">สาขา
                                <div class="ms-2">บูรณาการอุตสาหกรรมดิจิทัล</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                <div class="col"></div>
            </div>
        </div>
      < Footer />
    </>
  );
}
