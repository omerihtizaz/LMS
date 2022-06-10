import React, { Component } from 'react';
import { useNavigate, Link } from "react-router-dom";
// import { studentRollNum } from './learnerlogin';
// import serviceWorker from '../service/serviceworker';
// import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
// import {Link
// export var whichCourseClicked;
class Overview extends Component {
    
    constructor(props)
    {
        super(props);
        // this.state = {
        //     onGoing: [], 
        //     Completed: [],
        //     whichCourse: '',
        // }

    }
    
    render()
    {
        return(
            // <></>
            <>

            {/* ONGOING */}
                
                    {/* <Link to ={{pathname: "/"}}> */}
                    {/* <button   className='btn btn-1 btn-sep icon-info' type="button">Admin</button></Link><br/> */}
                    <Link to ={{pathname: "/learnerLogin"}}>
                        <button   className='btn btn-1 btn-sep icon-info' type="button">Learner</button>
                    </Link><br/>
                    <Link to ={{pathname: "/adminLogin"}}>
                        <button   className='btn btn-1 btn-sep icon-info' type="button">Admin</button>
                    </Link><br/>
                    
            </>
        )
    }
}

export default Overview;
