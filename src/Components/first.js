import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function First() {
  return (
    <section className="vh-100 bg-white bg-image" style={{ backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/01/18/61/65/1000_F_118616519_k7bfYYxDnEeem4oIgIGttiCi46xIfIbG.jpg')" }}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <div className="card ">
            <div className="card-body ">
                <h5 className="card-title text-center text-white ">Login</h5>
                <div className="text-center">
                  <Link to={"/login"} className="btn btn-primary mb-3">Admin Login</Link>
                  <br />
                  <Link to={"/userLogin"} className="btn btn-primary mt-2">Employee Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
