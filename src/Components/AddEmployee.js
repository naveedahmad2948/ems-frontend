import React from 'react'
import { Formik, Form , Field ,ErrorMessage } from 'formik';
import  Axios  from 'axios';
import { Link } from 'react-router-dom';
export default function AddEmployee() {

  const initialValues ={
    name: '',
    email: '',
    password: '',
    address: '',
    // image: null,
  }
  
    const handleSubmit = async (values) => {
      console.log(values);
         Axios.post('http://localhost:5000/users', values);
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
            <h3 className="mb-5 text-white">Add Employee</h3>

            <Formik
              initialValues={initialValues}
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
                <div className="form-outline mb-4">
                  <Field
                    type="text"
                    id="typeEmailX-2"
                    name="address"
                    className="form-control form-control-lg bg-transparent text-white "
                    placeholder="Address"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-outline mb-4">
                  <Field
                    type="text"
                    id="typeEmailX-2"
                    name="salary"
                    className="form-control form-control-lg bg-transparent text-white "
                    placeholder="Salary"
                  />
                  <ErrorMessage
                    name="salary"
                    component="div"
                    className="error"
                  />
                </div>

                <Link to={"/employee"}
                  className="btn btn-primary btn-lg btn-block bg-transparent"
                  type="submit"
                >
                  Add
                </Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
