export default function Navbar() {
    return (
        <>
            <div class="container my-4" >
                <footer class="text-center text-lg-start text-white" style="background-color: rgba(97, 4, 143, 0.6)">
                    <div class="container p-3">
                        <div class="row my-5">
                            <div class="col-lg-5 col-md-6 mb-5 mb-md-0">

                                <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 60px; height: 60px;">
                                    <img src="https://upload.wikimedia.org/wikipedia/th/thumb/d/db/Chiang_Mai_University.svg/640px-Chiang_Mai_University.svg.png" height="100" alt=""
                                        loading="lazy" />
                                </div>


                                <p class="text-center"><strong>ที่อยู่ :</strong>สำนักงานหอพักนักศึกษาห้วยแก้ว ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>

                                <div>
                                    <ul class="list-unstyled d-flex flex-row justify-content-center">
                                        <li>
                                            <a class="text-white px-2" href="#!">
                                                <i class="fab fa-facebook-square"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a class="text-white px-2" href="#!">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a class="text-white ps-2" href="#!">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col-lg-4 col-md-6 mb-5 mb-md-0">
                                    <h5 class="text-uppercase mb-4">เบอร์โทรศัพท์ / Fax :</h5>

                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>ที่พัก/ทะเบียนราษฎร์ :	053-944749</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>กิจกรรม :	053-944750</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>การเงิน :	053-944745</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>ธุรการ :	053-944747</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>บุคคล :	053-944748</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>พัสดุ :	053-944751</a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#!" class="text-white"><i class="fas fa-phone pe-2"></i>Fax :	053-944700</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase mb-4">ช่องทางการติดต่อ</h5>

                                    <ul class="list-unstyled">
                                        <li>
                                            <p><i class="fas fa-map-marker-alt pe-2"></i>มหาวิยาลัยเฃียงใหม่</p>
                                        </li>
                                        <li>
                                            <p><i class="fab fa-facebook pe-2"></i>สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</p>
                                        </li>
                                        <li>
                                            <p><i class="fab fa-twitter pe-2 "></i>@DorminCMU</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="text-center p-3" style="background-color: rgba(97, 4, 143, 0.6)">
                            © 2019:
                            <a class="text-white" href="https://mdbootstrap.com/">สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</a>
                        </div>
                    </div>
                </footer >
            </div>
        </>
    );
}
