import React from 'react'

export default function Home() {
    return (
        <div>
        <div className='p-3 d-flex justify-content-around mt-3'>
  <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
    <div className='text-center pb-1'>
      <h4>Admin</h4>
    </div>
    <hr />
    <div className=''>
      <h5>Total: { }</h5>
    </div>
  </div>

  <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
    <div className='text-center pb-1'>
      <h4>Employee</h4>
    </div>
    <hr />
    <div className=''>
      <h5>Total: { }</h5>
    </div>
  </div>

  <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
    <div className='text-center pb-1'>
      <h4>Salary</h4>
    </div>
    <hr />
    <div className=''>
      <h5>Total: { }</h5>
    </div>
  </div>
</div>
<div className='mt-4 px-5 p-3'>
    <h3>List of Admins</h3>
    <table className='table'>
        <tbody>
        <thead>
            <th>Email</th>
            <th>Action</th>
        </thead>
        </tbody>
    </table>
</div>
</div>

    )
}
