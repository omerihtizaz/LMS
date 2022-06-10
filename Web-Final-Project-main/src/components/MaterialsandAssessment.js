import React, { Component } from 'react'

class MaterialnAssess extends Component{
    constructor(props) {
        super(props)
        this.displaymaterial = this.displaymaterial.bind(this);
        this.displayassessment = this.displayassessment.bind(this);
        this.submit_ass = this.submit_ass.bind(this);
        this.state = {
            selectedFile: null,
            name : "",
            time: "",
            criteria: "",
            ques:"",
            op1:"",
            op2:"",
            op3:"",
            op4:"",
            corr_op:"",
        };
    }    
    displaymaterial(){
        document.getElementById("mat").style.visibility = "visible";
        document.getElementById("mat1").style.visibility = "visible";
    }
    displayassessment(){
        document.getElementById("f1").style.visibility = "visible";
    }
    submit_ass(){
        // document.getElementById("p").innerHTML = this.state.name;
    }
    onFileUpload = () => {
        var newel = document.createElement("ul");
        newel.innerHTML = this.state.selectedFile;
        var l = document.getElementById("1");
        l.append(newel);
    };
    render(){ 
        return(
            <>
                <button  className='btn btn-1 btn-sep icon-info' onClick={this.displaymaterial}>Materials</button>
                <button  className='btn btn-1 btn-sep icon-info' onClick={this.displayassessment}>Assessment</button>
                <br/><br/>
                <input id="mat" style={{visibility:"hidden"}} type="file" onChange={(e) => this.setState({ selectedFile: e.target.files[0].name })} />
                <button  className='btn btn-1 btn-sep icon-info'  id="mat1" style={{visibility:"hidden"}} onClick={this.onFileUpload}>Upload!</button>
                <form id="f1" style={{visibility:"hidden"}}>
                    <label>Name <input type="text" onChange={(e)=> this.setState({name: e.target.value})}/> </label><br/>
                    <label>Time duration <input type="text"onChange={(e)=> this.setState({time: e.target.value})}/> </label><br/>
                    <label>Minimum Passing Criteria <input type="text" onChange={(e)=> this.setState({criteria: e.target.value})}/></label><br/>
                    <label>Question <textarea name="ques" onChange={(e)=> this.setState({ques: e.target.value})}/></label><br/>
                    <label>Option1<input type="text" onChange={(e)=> this.setState({op1: e.target.value})} /></label>
                    <label>Option2<input type="text" onChange={(e)=> this.setState({op2: e.target.value})}/></label>
                    <label>Option3<input type="text" onChange={(e)=> this.setState({op3: e.target.value})}/></label>
                    <label>Option4<input type="text" onChange={(e)=> this.setState({op4: e.target.value})}/></label><br/>
                    <label>Correct Option<input type="text" onChange={(e)=> this.setState({corr_op: e.target.value})}/></label> 
                    <button  className='btn btn-1 btn-sep icon-info' onClick={this.submit_ass}>Submit</button>
                </form>
                <ol id="1"></ol>
            </>
        );
    }
}
export default MaterialnAssess
