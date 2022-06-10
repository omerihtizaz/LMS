import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import {Link
// export var studentRollNum;
class AdminLogin extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            rollNum: "",
            pass: "",

        }
    }
    render()
    {
        return(
            <>
                Roll Number: <input type="text" name="rollnume"
                        placeholder="i180404..." onChange={(e)=> this.setState({rollNum: e.target.value})}/><br/>
                    Password<input type="password" name="password"
                        placeholder="****" onChange={(e)=> this.setState({pass: e.target.value})} /><br/>
                        {/* </Link> */}
                        <Link to ={{pathname: "/AddCourse"}}>
                            <button  className='btn btn-1 btn-sep icon-info' type="button">Login</button></Link><br/>
            </>
        )
    }
}

export default AdminLogin;
