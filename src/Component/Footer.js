import React from 'react';

export default function Footer() {
    return (
        <>
            <footer class="w-100 py-4 flex-shrink-0">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-5 col-md-6">
                            <img src='https://library.cmu.ac.th/layout/default/images/CMU_WEB/Chiang_Mai_University_Logo.png' height="100" alt="" ></img>
                            <h6 class="h6 text-white my-2">ที่อยู่</h6>
                            <p class="small text-muted">สำนักงานหอพักนักศึกษา หอพักนักศึกษาหญิง อาคาร 7239 ถนนห้วยแก้ว ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>
                            <p class="small text-muted mb-0">&copy;2019 สำนักงานหอพักนักศึกษา <a class="text-primary" href="#">http://udo.oop.cmu.ac.th</a></p>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">เบอร์โทรศัพท์</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a class="footer-a">ที่พัก/ทะเบียนราษฎร์ :	053-944749</a></li>
                                <li><a class="footer-a">กิจกรรม :	053-944750</a></li>
                                <li><a class="footer-a">การเงิน :	053-944745</a></li>
                                <li><a class="footer-a">ธุรการ :	053-944747</a></li>
                                <li><a class="footer-a">บุคคล :	053-944748</a></li>
                                <li><a class="footer-a">พัสดุ :	053-944751</a></li>
                                <li><a class="footer-a">Fax :	053-944700</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-white mb-3">ช่องทางการติดต่อ</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a class="footer-a" href="#">Home</a></li>
                                <li><a class="footer-a" href="#">About</a></li>
                                <li><a class="footer-a" href="#">Get started</a></li>
                                <li><a class="footer-a" href="#">FAQ</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    );
}
