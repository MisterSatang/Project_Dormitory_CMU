import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';
import Item_dropdown_filter from '../Component/Item_dropdown_filter';
import Select_room from '../Component/Select_room';
import Select_room_full from '../Component/Select_room_full';


export default function App() {
  return (
    <>
    < Navbar />

    <div class="d-flex">
        <img src="img_dormitory/Select_room/11.jpg" alt="Bg-cmu" className="w-100 image-bg-select_room" />
    </div>
    <div class="container-fluid p-0">
        <div class="row mt-4 ms-4">
            <div class="col-xl-3 col-lg-4 col-md-5 col-12 pe-4 ps-0">
                <div class="bg-white shadow rounded-top-4">
                    <div class="pt-4 px-3  bg-light rounded-top-4 border-bottom border-1 border-3">
                        <div class="d-flex align-items-center"><img src="img_dormitory/imageStudent/01.jpg" alt="image" className="mr-3 profile-student shadow-sm rounded-3" />
                        <div class="ms-3">
                            <div class="d-inline-flex fs-5 m-0 me-2">สตางค์</div>
                            <div class="d-inline-flex fs-5 m-0">บุตรสัย</div>
                            <div class="font-weight-light text-muted mb-0">คณะ ศิลปะ สื่อ เทคโนโลยี</div>
                            <div class="font-weight-light text-muted mb-0">สาขา DII</div>
                        </div>
                        </div>
                        <div class="py-3 text-center text-gray">
                          ไม่มีการจองห้องพัก
                        </div>
                    </div>
                  

                <div class="p-1 bg-light rounded-r-4 shadow-sm mb-4">
                  <div class="input-group">
                  <input type="search" placeholder="ค้นหา : หมายเลขห้อง ?" aria-describedby="button-addon1" class="form-control border-0 bg-light" />
                    <div class="input-group-append">
                      <button id="button-addon1" type="submit" class="btn btn-link text-dark"><i class="bi bi-search"></i></button>
                    </div>
                  </div>
                </div>
                <p class="text-gray font-weight-bold text-uppercase px-3 small pb-3 mb-0"><i class="bi bi-funnel me-1"></i>Filter</p>

                <ul class="nav flex-column bg-light mb-0 px-4 py-3 rounded-ts-4">
                    <li class="nav-item">
                      <div class="mb-1">หอพัก</div>
                      <Item_dropdown_filter />
                    </li>
                    <li class="nav-item">
                      <div class="mb-1">ชั้น</div>
                      <Item_dropdown_filter />
                    </li>
                    <li class="nav-item">
                      <div class="mb-1">จำนวนคนว่าง</div>
                      <Item_dropdown_filter />
                    </li>
                </ul>
                </div>
            </div>
            <div class="col">
              <div class="container-fluid p-0">
                <div class="row">
                  <Select_room />
                  <Select_room_full />
                  <Select_room />
                  <Select_room />
                  <Select_room_full />
                  <Select_room />
                  <Select_room />
                  <Select_room />
                </div>
              </div>
            </div>
        </div>
    </div>
      < Footer />
    </>
  );
}
