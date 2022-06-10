import { useState } from 'react';
import React, { Component } from 'react'
import "./CourseSetting.css"

export default class Users extends Component{

    constructor(props){
        super(props)
        this.state = {
            addlearner : false,
            name:"",
            course:""
        }
        this.add_learner = this.add_learner.bind(this);
        this.enroll_learner=this.enroll_learner.bind(this);
    }
    add_learner(){
        // this.setState({addlearner : true});
        document.getElementById("d1").style.visibility="visible";
    }
    enroll_learner(){
        var el = document.createElement("p");
        var con = document.createTextNode("learner enrolled");
        el.appendChild(con);
        document.body.appendChild(el)
    }
    render(){
        return(
            <>
            <h1>Learner Details</h1>
            <table>
            <tr>
                <th>Learner Name </th>
                <th>Course Name </th> 
                <th>Progress</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td style={{backgroundColor:"white",border:"0px"}}><button style={{width:"50%"}}>Un-Enroll</button></td>
            </tr>
            </table>
            <button onClick={this.add_learner} style={{width:"10%"}}>Add Learner</button>
            <div id="d1" style={{visibility:"hidden"}}>
                <h2>Enroll Learner</h2> 
                <label>Name <input type="text" onChange={(e)=> this.setState({name: e.target.value})}/> </label><br/>
                <label>Course <input type="text" onChange={(e)=> this.setState({course: e.target.value})}/> </label><br/>
                <button style={{width:"10%"}} onClick={this.enroll_learner}>Enroll</button>
            </div>
            {/* {this.addlearner ? (
                <h1>hello</h1>
            ):(
                <h1>no learner</h1>
            )} */}

            
            </>
        );
    }
};         