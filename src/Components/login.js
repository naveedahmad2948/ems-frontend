import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ems-project.up.railway.app/api/login', {
        email,
        password
      });
      console.log(response);
      if (response.status === 200) {
        console.log('Login successful!');
        navigate('/home');
      } else {
        console.log('Login failed!');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.log('An error occurred during login:', error);
    }
  };

  return (
    <section
      className="vh-100"
      style={{
        backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/18/61/65/1000_F_118616519_k7bfYYxDnEeem4oIgIGttiCi46xIfIbG.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-black text-white"
              style={{ borderRadius: '1rem' }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5 text-white">Welcome to Login Page</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg bg-transparent text-white"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg bg-transparent"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block bg-transparent"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
