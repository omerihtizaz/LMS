import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "./components/navbar";
// import RecordList from "./components/recordList";
// import Edit from "./components/edit";
// import Create from "./components/create";
import AddCourse from "./components/addCourse";
import MaterialnAssess from "./components/MaterialsandAssessment";
import LearnerLogin from "./components/learnerlogin";
import LearnerOne from './components/learner1';
import CourseUpdates from './components/CourseUpdates'
import ShowCourseMaterial from './components/showCourseMaterialLearner';
import Overview from "./components/overview";
import AdminLogin from "./components/adminLogin";
import Quiz from './components/Quiz';
import PDF from './components/generateCertificate'
// import ShowLearnerCourse from "./components/ShowLearnerCourses";
const App = () => {
 return (
   <div>
     <Routes>

        <Route exact path="/" element={<Overview />} />
       <Route exact path="/learnerLogin" element={<LearnerLogin />} />
       <Route exact path="/adminLogin" element={<AdminLogin />} />
       <Route exact path="/AddCourse" element={<AddCourse />} />
       <Route exact path="/learner1" element={<LearnerOne />} />
       <Route exact path="/showCoursMaterialLearner" element={<ShowCourseMaterial />} />
       <Route exact path="/CourseUpdates" element={<CourseUpdates />} />
       <Route exact path="/Quiz" element={<Quiz />} />
       <Route exact path="/PDF" element={<PDF />} />

       {/* <Route exact path="/ShowLearnerCourses" element={<ShowLearnerCourse />} /> */}

       
       {/* <Route exact path="/material" element={<MaterialnAssess  />} /> */}
     </Routes>
   </div>
 );
};
 
export default App;
