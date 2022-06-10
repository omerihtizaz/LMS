import { useState } from 'react';
import React, { Component } from 'react'
import "./CourseSetting.css"

export default class CourseSetting extends Component{


    render(){
        return(
            <>
            <h1>Course Details</h1>
            <table>
            <tr>
                <th>Course Name </th>
                <th>Course Overview </th>
                <th>Start Date </th>
                <th> End Date </th> 
                <th>Enrollment Link </th> 
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td><button style={{width:"30%",marginLeft:"35%"}}>Update</button></td>
                <td><button style={{width:"30%",marginLeft:"35%"}}>Update</button></td>
                <td><button style={{width:"30%",marginLeft:"35%"}}>Update</button></td>
                <td><button style={{width:"30%",marginLeft:"35%"}}>Update</button></td>
                <td><button style={{width:"30%",marginLeft:"35%"}}>Update</button></td>
		    </tr>
	        </table>

            </>
        );
    }
};