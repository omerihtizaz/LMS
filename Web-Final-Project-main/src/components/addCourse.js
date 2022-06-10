import React, { Component } from 'react'
import serviceWorker from '../service/serviceworker'
import {Course} from './classes/course'
import FileViewer from "react-file-viewer";
import {Student} from './classes/student'
import {Learner} from './classes/learner'
import { Presentation, Slide, Text, Shape, Image, render } from "react-pptx";
import { Link } from 'react-router-dom';
import { studentRollNum } from './learnerlogin';
import './main.css'

import './addCourse.css'

class ListCourseComponent extends Component {
    
    constructor(props) {
        super(props)
        console.log("studentRollNum", studentRollNum)
        this.goback = this.goback.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
        this.courseSettings = this.courseSettings.bind(this);
        this.viewUsers = this.viewUsers.bind(this);
        this.Usergoback = this.Usergoback.bind(this);
        this.courseMaterial=this.courseMaterial.bind(this);
        this.handleMaterialAdd = this.handleMaterialAdd.bind(this);
        this.handleAssessmentAdd = this.handleAssessmentAdd.bind(this);
        this.state = {
                Courses: [],
                Students: [],
                Learners: [],
                name : "",
                rollnum :  '',
                showCourse: false, 
                showCoursematerial :false,
                whichCourse: -1, 
                whichCourseObject: new Course(),
                viewDetailsVar: false,
                studentroll: "",
                courseid: "",
                whichLearner: [],
                whichAssessment:[],
                c_name : "",
                c_id:"",
                c_overview:"",
                c_img:"",
                c_start:"",
                c_end:"",
                c_offer:"",
                c_difficulty:"",
                vid1:"",
                vid2:"",
                pdf:"",
                pptx:"",
                criteria: "",
                ques:"",
                op1:"",
                op2:"",
                op3:"",
                op4:"",
                corr_op:"",
        }
    }
    
    componentDidMount(){
        // var cour =new Course();
        // cour.create(1212, 'CS1212',"web",  false, 2, "FAST"
        // , '../pptx/web2.mp4' ,'../pptx/web1.mp4', '../pptx/web.pdf', '../pptx/web.pptx', 'none', 'none' );
        // console.log("cour", cour)
        // serviceWorker.createCourse(cour);
        // var cour =new Course();
        // cour.create(1234, 'CS1234',"Cloud",  false, 2, "FAST"
        // , '../pptx/Cloud2.mp4' ,'../pptx/Cloud1.mp4', '../pptx/Cloud.pdf', '../pptx/Cloud.pptx', 'none', 'none' );
        // console.log("cour", cour)
        // serviceWorker.createCourse(cour);
        // serviceWorker.findCourseByIDandUpdate('1221', '../pptx/pptx');
        
        serviceWorker.getCourses().then(res=>res.data.Courses).then(
            result=>{
                console.log("RESULT: ", result)
                this.setState({Courses:result});
            }
        )
        serviceWorker.getLearner().then(res=>res.data.Learners).then(
            result=>{
                console.log("Learner ka result: ", result)
                this.setState({Learners:result});
            }
        )
        serviceWorker.getStudents().then(res=>res.data.Students).then(
            result=>{
                console.log("RESULT: ", result)
                this.setState({Students:result});
                        }
        )
    }
    handlerLearnerAdd = (event) => {
        event.preventDefault();
        if (this.state.studentroll != '' || this.state.courseid != '')
        {
            serviceWorker.createLearner(new Learner(this.state.studentroll, this.state.courseid));
            this.state.studentroll = '';
            this.state.courseid = '';
        }
        
      }
    handleStudentAdd = (event) => {
        event.preventDefault();
        if (this.state.name != '' || this.state.rollnum != '')
        {
            serviceWorker.createStudent(new Student(this.state.name, this.state.rollnum));
            this.state.name = '';
            this.state.rollnum = '';
        }
        
      }
    handleMaterialAdd = (event) =>{
        
        serviceWorker.findCourseByIDandUpdated(this.state.whichCourse,this.state.pdf, this.state.pptx, this.state.vid1, this.state.vid2)
        event.preventDefault();

    }
    handleAssessmentAdd = (event) =>{
        var q = this.state.ques + ";" + this.state.op1 + ';' + this.state.op2 + ";" + this.state.op3 + ";" + this.state.op4;
        serviceWorker.gfchgvjhbkjl(this.state.whichCourse, q, this.state.corr_op)
        event.preventDefault();
    }
    handleCourseAdd=(event)=>{
        event.preventDefault();
        if (this.state.c_name != '' || this.state.c_id != '')
        {
            serviceWorker.createCourse(new Course(this.state.c_id,this.state.c_name,this.state.c_overview,
                true,this.state.c_difficulty,this.state.c_offer,'none','none','none','none','none','none','none','none','none','none','none'));
            this.state.c_end="";this.state.c_start="";this.state.c_id="";this.state.c_img="";this.state.c_name="";
            this.state.c_offer="";this.state.c_overview="";
        }
    }
    ShowStudents = (event) => {
        event.preventDefault();
        serviceWorker.getStudents().then(res=>res.data.Students).then(
            result=>{
                console.log("RESULT: ", result)
                
                        }
        )
    } 
    courseMaterial(){
        this.state.showCoursematerial = true;
        this.setState(this.state);
        serviceWorker.findCourseByID(this.state.whichCourse).then(res=>res.data.crs).then(
            result=>{
                this.setState({whichAssessment:result});
            }
        )
    }
    courseSettings()
    {
        this.state.showCourse = true;
        this.setState(this.state);
    }
    viewUsers()
    {
        this.state.viewUserDetails = true;
        // console.log("Which User: ", this.state.whichCourse)
        serviceWorker.findLearnerbyCourseID(this.state.whichCourse).then(res=>res.data.crs).then(
            result=>{
                // console.log("ye hai result", result)
                this.setState({whichLearner:result});
            }
        )
        this.setState(this.state);
    }
    Usergoback()
    {
        this.state.viewUserDetails = false;
        this.setState(this.state)
    }
    viewDetails(id)
    {
        this.state.viewDetailsVar = true;
        console.log("key: " , id);
        this.state.whichCourse = id;
        serviceWorker.findCourseByID(id).then(res=>res.data.crs).then(
            result=>{
                // console.log("RESULT: ", result[0])
                this.setState({whichCourseObject: result[0]})
                        }
        )
        this.state.whichCourseObject.pdf = './cloud.pdf';
        // var course = serviceWorker.getCourses()
        this.setState(this.state);
        console.log(this.state)
        
    }
    goback()
    {
        this.state.showCourse = false;
        this.state.showCoursematerial=false;
        this.setState(this.state);
    }
    onLinkClick = (e) => {
        e.preventDefault();
        // history.push('/showLearnerCourses');
    };
    
    render() {
        return (
            
            <div>
                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                
                <form className='form__group'>
                    Student Name: <input className='form__input' type="text" name="StudentName"
                        placeholder="Omer" onChange={(e)=> this.setState({name: e.target.value})}/><br/>
                    Roll Number<input className='form__input' type="text" name="RollNumber"
                        placeholder="18I-0000" onChange={(e)=> this.setState({rollnum: e.target.value})} /><br/>
                    <button  className='btn btn-1 btn-sep icon-info' type="button" onClick={this.handleStudentAdd}>Add Student</button><br/><br/>
                    {/* <button  className='btn btn-1 btn-sep icon-info' type="button" onClick={this.ShowStudents}>Show Students</button> */}
                </form>

                )}
                

                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                    <form className='form__group'>
                    Student Roll Number: <input className='form__input' type="text" name="StudentRollnum"
                        placeholder="i18-0000" onChange={(e)=> this.setState({studentroll: e.target.value})}/><br/>
                    Course ID: <input className='form__input' type="text" name="Course ID"
                        placeholder="1234" onChange={(e)=> this.setState({courseid: e.target.value})} /><br/>
                    <button  className='btn btn-1 btn-sep icon-info' type="button" onClick={this.handlerLearnerAdd}>Add Learner</button><br/><br/>
                    {/* <button  className='btn btn-1 btn-sep icon-info' type="button" onClick={this.ShowStudents}>Show Students</button> */}
                    </form>
                )}
                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                    <form id="f1">
                        <label>Course Name <input placeholder='Web'  className='form__input' type="text" onChange={(e)=> this.setState({c_name: e.target.value})}/> </label><br/>
                        <label>Course ID<input placeholder='1234' className='form__input' type="text"onChange={(e)=> this.setState({c_id: e.target.value})}/> </label><br/>
                        <label>Course Overview <input placeholder='Computer Vision' className='form__input' type="text" onChange={(e)=> this.setState({c_overview: e.target.value})}/></label><br/>
                        <label>Course Image <input placeholder='img.ex' className='form__input' type="text" onChange={(e)=> this.setState({c_img: e.target.value})}/></label><br/>
                        <label>Start Date<input placeholder='0/0/000' className='form__input' type="text" onChange={(e)=> this.setState({c_start: e.target.value})} /></label><br/>
                        <label>End Date<input placeholder='0/0/000' className='form__input' type="text" onChange={(e)=> this.setState({c_end: e.target.value})}/></label><br/>
                        <label>Offered By<input placeholder='FAST' className='form__input' type="text" onChange={(e)=> this.setState({c_offer: e.target.value})}/></label> <br/>
                        <label>Difficulty Level<input placeholder='1,2,3,4' className='form__input' type="text" onChange={(e)=> this.setState({c_difficulty: e.target.value})}/></label> <br/>
                        <button  className='btn btn-1 btn-sep icon-info' onClick={this.handleCourseAdd}>Add Course</button>
                    </form>     
                )}

                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&
                (
                    <table>
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Offered By</th>
                        <th scope="col">Difficulty Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Courses.map(employee =>  
                                <tr key = {employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.name} </td>
                                    <td> {employee.OfferedBy} </td>   
                                    <td> {employee.difficultyLevel}</td>
                                    <button  className='btn btn-1 btn-sep icon-info' onClick={() =>this.viewDetails(employee.id)}>View Details</button>
                                </tr>)
                        }
                    </tbody>
                    <caption>Table: 1.1 A summary of Courses</caption>
                </table>
                )}
                
               

                    
                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Roll Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Students.map(employee =>  
                                <tr key = {employee.name}>
                                    <td> {employee.name} </td>
                                    <td> {employee.rollNum} </td>    
                                </tr>)
                            }
                        </tbody>
                        <caption>Table: 1.2 A summary of Students</caption>
                    </table>
                )}

                {!this.state.showCourse && !this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Student Roll Number</th>
                                <th scope="col">Course ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Learners.map(employee =>  
                                <tr key = {employee.studentRoll}>
                                    <td> {employee.studentRoll} </td>
                                    <td> {employee.courseID} </td>    
                                </tr>)
                            }
                        </tbody>
                        <caption>Table: 1.2 A summary of Learners</caption>
                    </table>
                )}
                 {!this.state.showCourse && this.state.viewDetailsVar && !this.state.showCoursematerial &&(
                    <>
                        <button  className='btn btn-1 btn-sep icon-info' onClick={this.courseMaterial}>Course Material and Assessments</button><br/>
                        <button  className='btn btn-1 btn-sep icon-info' onClick={this.courseSettings}>Course Settings</button><br/>
                        <button  className='btn btn-1 btn-sep icon-info' onClick={this.viewUsers}>Users</button>
                    </>
                )}


                {/* Course Settings */}
                {this.state.showCourse && this.state.viewDetailsVar &&
                (
                    <>
                    <table>
                   <thead>
                       <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Title</th>
                       <th scope="col">Offered By</th>
                       <th scope="col">Difficulty Level</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           
                           <tr key = {this.state.whichCourseObject.id}>
                               <td> {this.state.whichCourseObject.id} </td>
                               <td> {this.state.whichCourseObject.name} </td>
                               <td> {this.state.whichCourseObject.OfferedBy} </td>   
                               <td> {this.state.whichCourseObject.difficultyLevel}</td>
                               
                               {/* <button  className='btn btn-1 btn-sep icon-info' onClick={() =>this.viewDetails(this.state.whichCourseObject.id)}>View Details</button> */}
                           </tr>
                       }
                   </tbody>
                   <caption>Table: 1.1 A summary of Courses</caption>
               </table>
                       <button  className='btn btn-1 btn-sep icon-info' onClick={this.goback}>Go Back</button>
                    </>

                )}

                {this.state.showCoursematerial &&(
                    <>
                        <h1>Add Course Material</h1>
                        <form className='form__group'>
                            <label>Video 1 <input className='form__input' type="text" placeholder="src/video.mp4"onChange={(e)=> this.setState({vid1: e.target.value})}/> </label><br/>
                            <label>Video 2 <input className='form__input' type="text" placeholder="src/video.mp4"onChange={(e)=> this.setState({vid2: e.target.value})}/> </label><br/>
                            <label>PDF File <input className='form__input' type="text" placeholder="src/file.pdf"onChange={(e)=> this.setState({pdf: e.target.value})}/></label><br/>
                            <label>Presentation <input className='form__input' type="text" placeholder="src/file.pptx" onChange={(e)=> this.setState({pptx: e.target.value})}/></label><br/>
                            <button  className='btn btn-1 btn-sep icon-info' onClick={this.handleMaterialAdd}>Add Course Material</button>
                        </form>
                        <h1>Add Assessment Material</h1>
                        <form className='form__group'>
                            <label>Question <input className='form__input' type="text" onChange={(e)=> this.setState({ques: e.target.value})}/></label><br/>
                            <label>Option 1 <input className='form__input' type="text" onChange={(e)=> this.setState({op1: e.target.value})}/></label><br/>
                            <label>Option 2 <input className='form__input' type="text" onChange={(e)=> this.setState({op2: e.target.value})}/></label><br/>
                            <label>Option 3 <input className='form__input' type="text" onChange={(e)=> this.setState({op3: e.target.value})}/></label><br/>
                            <label>Option 4 <input className='form__input' type="text" onChange={(e)=> this.setState({op4: e.target.value})}/></label><br/>
                            <label>Correct Option <input className='form__input' type="text" onChange={(e)=> this.setState({corr_op: e.target.value})}/></label><br/>
                            <label>Passing Criteria <input className='form__input' type="text" placeholder='50% score' onChange={(e)=> this.setState({criteria: e.target.value})}/></label><br/>
                            <button  className='btn btn-1 btn-sep icon-info' onClick={this.handleAssessmentAdd}>Add Assessment</button>
                        </form>
                        <br/><h1>Course Material</h1>
                        <a href={require('../pptx/cloud.pdf')} target = "_blank">Download Pdf</a>
                       <button  className='btn btn-1 btn-sep icon-info' onClick={this.goback}>Go Back</button>
                       <br/><h1>Assessments</h1>
                        <table>
                            <thead>
                                <tr>
                                <th scope="col">Assessment Question</th>
                                <th scope="col">Correct Answer</th>
                                <th scope="col">Criteria</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    this.state.whichAssessment.map(index =>  
                                        <tr key = {index.question}>
                                        <td> {index.corr_ans} </td>
                                        <td> {index.criteria} </td>  
                                        </tr>)
                                }
                            </tbody>
                            <caption>Table: 1.1 A summary of Assessments</caption>
                        </table>
                    </>
                )
                }
                {/* USERS */}
                {this.state.viewUserDetails &&
                (
                    <>
                    <table>
                   <thead>
                       <tr>
                       <th scope="col">Student ID</th>
                       <th scope="col">Course ID</th>
                       <th scope="col">Passed</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           
                           this.state.whichLearner.map(employee =>  
                            <tr key = {employee.studentRoll}>
                                <td> {employee.studentRoll} </td>
                                <td> {employee.courseID} </td> 
                                <td> {employee.passed}</td>   
                            </tr>)
                       }
                   </tbody>
                   <caption>Table: 1.1 A summary of Learner</caption>
               </table>
                    </>

                )}
            </div>
        )
    }
}

export default ListCourseComponent


