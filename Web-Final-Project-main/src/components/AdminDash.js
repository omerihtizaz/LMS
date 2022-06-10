import React, { Component } from 'react';

class AdminDash extends Component {
    constructor(props) {
        super(props)
        this.displayCourseCount = this.displayCourseCount.bind(this);
        this.displayLearnersCount = this.displayLearnersCount.bind(this);
        this.displayMaterialsCount = this.displayLearnersCount.bind(this);
        this.displayCertificatesCount = this.displayLearnersCount.bind(this);
        
        this.state = {
        
        };
    }    
    
    displayCourseCount(){}
    displayLearnersCount(){}
    displayMaterialsCount(){}
    displayCertificatesCount(){}


    render() { 
        return (
            <p>HI</p>
           /<div>
            <nav>
                <button  className='btn btn-1 btn-sep icon-info'>Courses</button>
                <button  className='btn btn-1 btn-sep icon-info'>Materials</button>
                <button  className='btn btn-1 btn-sep icon-info'>Assesments</button>
                <button  className='btn btn-1 btn-sep icon-info'>Learners</button>
            </nav>

            <p>Number of Enrolled courses</p>
            <p>Number of Learners</p>
            <p>Number of Materials</p>
            <p>Certificates Issued</p>
            <p>Select a course</p>

            </div>
        );
    }
}
 
export default AdminDash;
