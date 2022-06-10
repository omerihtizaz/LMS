import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import { studentRollNum } from './learnerlogin';
import serviceWorker from '../service/serviceworker';
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
// import {Link
import {whichCourseClicked} from './learner1';
var pdf = ''
class LearnerOne extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            Course: [], 
            pdf: '',
            pptx: '',
            video1: '',
            video2: '',
        }

    }
    componentDidMount()
    {
        serviceWorker.findCourseByID(whichCourseClicked).then(res=>res.data.crs).then(
            result=>{
                // console.log(result)
                this.setState({Course:result});
                // console.log(result[0])
                if (result[0].id == '1212'){
                    this.setState({pdf: '../pptx/web.pdf'})
                    this.setState({pptx: '../pptx/web.pptx'})
                    this.setState({video1: '../pptx/web1.mp4'})
                    this.setState({video2: '../pptx/web2.mp4'})
                }
            }
        )
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
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Offered By</th>
                        <th scope="col">Difficulty Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Course.map(employee =>  
                                <tr key = {employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.name} </td>
                                    <td> {employee.OfferedBy} </td>   
                                    <td> {employee.difficultyLevel}</td>
                                    {/* <button  className='btn btn-1 btn-sep icon-info' onClick={() =>this.viewDetails(employee.id)}>View Details</button> */}
                                </tr>)
                        }
                    </tbody>
                    
                    <caption>Table: 1.1 A summary of Courses</caption>

                    {/* <a src={require(`${this.state.pdf}`)} target = "_blank">Download Pdf</a> */}
                    {/* {
                        this.state.Course.map(course =>
                            
                            )
                        
                    }       */}
                    <Link to ={{pathname: "/Quiz"}}>
                    <button  className='btn btn-1 btn-sep icon-info' type="button">Take Assesment</button></Link><br/>
                    
                    <Link to ={{pathname: "/learner1"}}>
                    <button  className='btn btn-1 btn-sep icon-info' type="button">Go Back</button></Link><br/> 
                    
                </table>
              
            </>
        )
    }
}

export default LearnerOne;
