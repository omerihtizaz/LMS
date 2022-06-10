
import React from 'react';

class ShowCourse extends React.Component {

    constructor(props)
    {
        this.course = this.props.value;
    }
    render() {
        return (
            <div>
                ID: <p>{this.course.id}</p>
            </div>     
        );
    }
}

export default ShowCourse;
