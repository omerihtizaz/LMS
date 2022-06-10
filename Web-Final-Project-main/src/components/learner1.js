import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { studentRollNum } from './learnerlogin';
import serviceWorker from '../service/serviceworker';
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
// import {Link
export var whichCourseClicked;
class LearnerOne extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            onGoing: [], 
            Completed: [],
            whichCourse: '',
        }

    }
    componentDidMount()
    {
        console.log(studentRollNum);
        serviceWorker.findLearnerByStudentID(studentRollNum).then(res=>res.data.crs).then(
            result=>{
                // console.log(result)
                var passed = [];
                var ongoing = [];
                for (var data in result)
                {
                    // console.log(data)
                    if (result[data].passed == 'false')
                    {
                        ongoing.push(result[data]);
                    }
                    else{
                        passed.push(result[data]);
                    }
                }
                this.setState({onGoing:ongoing});
                this.setState({Completed: passed})
                console.log("COMPLETED", this.state.Completed)
                console.log("ONGOING", this.state.onGoing)
                
                        }
        )
    }
    onsubmit = (event) => 
    {
        studentRollNum = this.state.rollNum;
        console.log(studentRollNum);
        // const navigate = useNavigate();
        // navigate('/AddCourse', { replace: true })
    }
    onCourseLinked(id)
    {
        whichCourseClicked = id; 
    }
    render()
    {
        return(
            // <></>
            <>

            {/* ONGOING */}
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
                           
                           this.state.onGoing.map(employee =>  
                            <tr key = {employee.studentRoll}>
                                <td> {employee.studentRoll} </td>
                                <td> {employee.courseID} </td> 
                                <td> {employee.passed}</td> 
                                <Link to ={{pathname: "/showCoursMaterialLearner"}}>
                            <button  className='btn btn-1 btn-sep icon-info' type="button" onClick={this.onCourseLinked(employee.courseID)}>Show Materials</button></Link><br/> 
                            </tr>)
                       }
                   </tbody>
                   <caption>Table: 1.1 A summary of On-going courses</caption>
               </table>
                        {/* <a href={require('../pptx/cloud.pdf')} target = "_blank">Download Pdf</a>
                       <button  className='btn btn-1 btn-sep icon-info' onClick={this.Usergoback}>Go Back</button> */}




                        {/* Completed */}
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
                           
                           this.state.Completed.map(employee =>  
                            <tr key = {employee.studentRoll}>
                                <td> {employee.studentRoll} </td>
                                <td> {employee.courseID} </td> 
                                <td> {employee.passed}</td>   
                            </tr>)
                       }
                   </tbody>
                   <caption>Table: 1.1 A summary of Completed Courses</caption>
               </table>
                        {/* <a href={require('../pptx/cloud.pdf')} target = "_blank">Download Pdf</a>
                       <button  className='btn btn-1 btn-sep icon-info' onClick={this.Usergoback}>Go Back</button> */}

                    <Link to ={{pathname: "/"}}>
                    <button  className='btn btn-1 btn-sep icon-info' type="button">Go Back</button></Link><br/>
                    
            </>
        )
    }
}

export default LearnerOne;
