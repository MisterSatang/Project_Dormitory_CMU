import React from 'react';

export default function Navbar() {
  return(
    <>  
    <div classname="container fixed-top border rounded rounded-4 bg-white mt-2">
        <nav classname="navbar navbar-expand-lg ">
            <div classname="container-fluid">
            <a classname="navbar-brand" href="#"><div classname="text-purple">หอพักนักศึกษา CMU</div></a>
            <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classname="navbar-toggler-icon">
                </span></button>
            <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
                <li classname="nav-item">
                    <a classname="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li classname="nav-item">
                    <a classname="nav-link" href="#">Booking</a>
                </li>
                <li classname="nav-item dropdown">
                    <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    หอพักนักศึกษาชาย
                    </a>
                    <ul classname="dropdown-menu">
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 1
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 2
                        <div classname="ms-2 fs-6 text-glay">: 053-944712</div>
                        </a>
                    </li><li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 3
                        <div classname="ms-2 fs-6 text-glay">: 053-944733</div>
                        </a>
                    </li><li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 4
                        <div classname="ms-2 fs-6 text-glay">: 053-944734</div>
                        </a>
                    </li><li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 5
                        <div classname="ms-2 fs-6 text-glay">: 053-944735</div>
                        </a>
                    </li><li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 6
                        <div classname="ms-2 fs-6 text-glay">: 053-944736</div>
                        </a>
                    </li><li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักชาย 7
                        <div classname="ms-2 fs-6 text-glay">: 053-944737</div>
                        </a>
                    </li>
                    </ul>
                </li>
                <li classname="nav-item dropdown">
                    <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    หอพักนักศึกษาหญิง
                    </a>
                    <ul classname="dropdown-menu">
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 1
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 2
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 3
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 4
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 5
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 6
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 7
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 8
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 9 
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 10
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 11
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    <li>
                        <a classname="dropdown-item d-inline-flex" href="#">หอพักหญิง 12
                        <div classname="ms-2 fs-6 text-glay">: 053-944711</div>
                        </a>
                    </li>
                    </ul>
                </li>
                <li classname="nav-item">
                    <a classname="nav-link disabled">Coming Soon</a>
                </li>
                </ul>
                <form classname="d-flex" role="search">
                <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button classname="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
            <img src="https://elearning.cmu.ac.th/pluginfile.php/1/theme_space/sliderimage1/1654502497/20597668_10213765367385655_1137600657_o%20%283%29.jpg" alt="Bg-cmu" classname="w-100" />
        </nav>
    </div>
    </>
  );
}

