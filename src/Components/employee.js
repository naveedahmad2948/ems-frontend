import React from 'react'
import { Link } from 'react-router-dom'
export default function Employee() {
  return (
    <div className='px-5 py-4'>
        <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
        </div>
        <Link to={"/addEmployee"} className='btn btn-success'>Add Employee</Link>
        <div className='d-flex justify-content-center mt-3' >
            <table className='table border shadow-sm text-center'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <td>Naveed Ahmad</td>
                    <td>image</td>
                    <td>naveedahmad.11222@gmail.com</td>
                    <td>Attock</td>
                    <td>400000</td>
                    <td><Link to={"/employeeEdit"} className='btn btn-sm btn-primary me-2 '>Edit</Link><button className='btn btn-sm btn-danger'>Delete</button></td>
            </table>
        </div>
    </div>

  )
}
