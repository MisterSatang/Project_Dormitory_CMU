import React from 'react';

export default function Footer() {
    return (
        <>
        <footer>
            <div class="container py-2">
                <div class="row py-4">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="https://www.cmu.ac.th/content/images/logo_footer.png" alt width={330} className="mb-3" />


                        <p class="font-italic text-white">ที่อยู่ : สำนักงานหอพักนักศึกษา อาคาร 7239 ถนนห้วยแก้ว ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>
                        <ul class="list-inline mt-1">
                            <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="text-white bi bi-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="text-white bi bi-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="text-white bi bi-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#" target="_blank" title="website"><i class=" text-white bi bi-browser-edge me-1"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <div class="d-flex mb-4 h-2"><h6 class="text-white text-uppercase font-weight-bold">เบอร์โทรศัพท์</h6></div>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">ที่พัก: 053-944749</a></li>
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">กิจกรรม: 053-944750</a></li>
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">การเงิน: 053-944745</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <div class="d-flex mb-4 h-2"><h6 class="text-white text-uppercase font-weight-bold"></h6></div>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">ธุรการ: 053-944747</a></li>
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">บุคคล: 053-944748</a></li>
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">พัสดุ: 053-944751</a></li>
                            <li class="mb-2 hover-link"><a href="#" class="text-white text-decoration-none">Fax: 053-944700</a></li>

                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-lg-0">
                        <h6 class="text-white text-uppercase font-weight-bold mb-4">ช่องทางการติดต่อ</h6>
                        <ul class="list-unstyled text-muted">
                                <li class="hover-link"><a class="text-decoration-none text-white footer-a" href="https://www.facebook.com/dormCMU/"><i class="bi bi-facebook me-2 "></i>https://www.facebook.com/dormCMU/</a></li>
                                <li class="hover-link"><a class="text-decoration-none text-white footer-a" href="https://twitter.com/dormincmu"><i class="bi bi-twitter me-2"></i>https://twitter.com/dormincmu</a></li>
                                <li class="hover-link"><a class="text-decoration-none text-white footer-a" href="http://udo.oop.cmu.ac.th"><i class="bi bi-browser-edge me-2"></i>http://udo.oop.cmu.ac.th</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bg-light py-2">
                <div class="container text-center">
                    <p class="text-muted mb-0 py-2">สำนักงานหอพักนักศึกษา มหาวิทยาลัยเชียงใหม่</p>
                </div>
            </div>
        </footer>
        </>
    );
}
