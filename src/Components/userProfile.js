import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { Link, Outlet } from "react-router-dom";
function UserProfile() {
    return (
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">User Dashboard</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link to={"/userProfile"} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people text-white"></i> <span class="ms-1 d-none d-sm-inline text-white">Profile</span> </Link>
                    </li>
                    <li>
                        <Link to={"/"} class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people text-white"></i> <span class="ms-1 d-none d-sm-inline text-white">Logout</span> </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col p-0 m-0">
         <div className="p-2 d-flex justify-content-center shadow">
         <h4>Employee ManagementSystem</h4>
         </div>
        </div>
    </div>
</div>

    );
  }
  
  export default UserProfile;

