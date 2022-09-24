import React from 'react';

export default function Footer() {
    return (
        <>
            <footer>
                <div class=" container pt-3 pb-1">
                    <div class="row py-3">
                        <div class="col-lg-4 col-md-6 mb-lg-0"><img src="https://www.cmu.ac.th/content/images/logo_footer.png" alt width={330} className="mb-3" />


                            <p class="font-italic text-white-50 fw-light">ที่อยู่ : สำนักงานหอพักนักศึกษา อาคาร 7239 ถนนห้วยแก้ว ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>

                        </div>
                        <div class=" col-lg-4 col-md-12  mb-lg-0">
                            <div class="container m-0 p-0">
                                <div class="row">
                                    <div class=" justify-content-center d-flex  h-1"><div class=" mb-2 fs-5 text-white-80 fw-bolder d-flex me-5"><i class="bi bi-telephone-fill me-3"></i>เบอร์โทรศัพท์</div></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12">
                                        <ul class="list-unstyled mb-0">
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">ที่พัก: 053-944749</a></li>
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">กิจกรรม: 053-944750</a></li>
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">การเงิน: 053-944745</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <ul class="list-unstyled mb-0">
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">ธุรการ: 053-944747</a></li>
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">บุคคล: 053-944748</a></li>
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">พัสดุ: 053-944751</a></li>
                                            <li class="mb-2 hover-link"><a href="#" class="text-white-50 text-decoration-none fw-light">Fax: 053-944700</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 mb-lg-0">
                            <div class="mb-2 fs-5 text-white-80 font-weight-bold fw-bolder"><i class="bi bi-chat-dots-fill me-3"></i>ช่องทางการติดต่อ</div>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-2 hover-link"><a class="text-decoration-none text-white-50 footer-a fw-light" href="https://www.facebook.com/dormCMU/"><i class="bi bi-facebook me-2 "></i>https://www.facebook.com/dormCMU/</a></li>
                                <li class="mb-2 hover-link"><a class="text-decoration-none text-white-50 footer-a fw-light" href="https://twitter.com/dormincmu"><i class="bi bi-twitter me-2"></i>https://twitter.com/dormincmu</a></li>
                                <li class="mb-2 hover-link"><a class="text-decoration-none text-white-50 footer-a fw-light" href="http://udo.oop.cmu.ac.th"><i class="bi bi-browser-edge me-2"></i>http://udo.oop.cmu.ac.th</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="bg-dark-150 py-1">
                    <div class="container-foot text-center">
                        <p class="text-muted mb-0 py-2">สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
