import { Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Components/adminDashboard';
import Profile from './Components/profile';
import Employee from './Components/employee';
import Home from './Components/home';
import AddEmployee from './Components/AddEmployee';
import EmployeeEdit from './Components/EmployeeEdit';
import Login from './Components/login';
import First from './Components/first';
import UserLogin from './Components/userLogin';
import UserProfile from './Components/userProfile';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<First />}></Route>
          <Route path="/" element={<AdminDashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/employeeEdit" element={<EmployeeEdit />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userProfile" element={<UserProfile />} />
         </Routes>
    </div>
  );
}

export default App;
