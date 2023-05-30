import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserSchema from '../YUP/yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function UserLogin() {
  const initialValues = {
    email: '',
    password: ''
  };
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('https://ems-project.up.railway.app/api/login', values);
      if (response.status === 200) {
        console.log('Login successful!');
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

                <Formik
                  initialValues={initialValues}
                  validationSchema={UserSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="form-outline mb-4">
                      <Field
                        type="email"
                        id="typeEmailX-2"
                        name="email"
                        className="form-control form-control-lg bg-transparent text-white "
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <Field
                        type="password"
                        id="typePasswordX-2"
                        name="password"
                        className="form-control form-control-lg bg-transparent "
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>

                    <Link to={"/userProfile"}
                      className="btn btn-primary btn-lg btn-block bg-transparent"
                      type="submit"
                    >
                      Login
                    </Link>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}