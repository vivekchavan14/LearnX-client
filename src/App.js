import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/courses';
import Footer from './components/Layout/Footer/footer';
import Login from './components/Auth/login';
import Signup from './components/Auth/signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import Contact from './components/Contact/contact';
import RequestCourse from './components/Request/Request';
import About from './components/About/About';
import CoursePage from './components/CoursePage/coursePage';
import NotFound from './components/Layout/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Admin/Dashboard/Sidebar';
import AdminDashboard from './components/Admin/Dashboard/AdminDashboard';
import CreateCourses from './components/Admin/CreateCourse/CreateCourse';


function App() {

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
   <Router>

    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/request" element={<RequestCourse />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/createcourse' element={<CreateCourses />} />  
        
     </Routes>
          <Footer>

          </Footer>
     
   </Router>
  );
}

export default App;
