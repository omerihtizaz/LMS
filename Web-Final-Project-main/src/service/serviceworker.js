import axios from 'axios';

var Course_API_BASE_URL = "http://localhost:8080/";
class finder{
    constructor(id, what)
    {
        this.id = id;
        this.what = what;
    }
}
class updateCourser{
    constructor(id, pdf, pptx, v1, v2, q, c)
    {
        this.id = id;
        this.pdf = pdf;
        this.pptx = pptx;
        this.v1 = v1;
        this.v2 = v2;
        this.q = q;
        this.c = c;
        
    }
}

class CourseService {


    findCourseByIDandUpdated(id, pdf = '', pptx = '', v1 = '', v2 = '', q = '', c = '')
    {   
        var a = new updateCourser(id, pdf, pptx, v1, v2, q, c);
        console.log(a);
        return axios.post(Course_API_BASE_URL + "asfghfgfsd", a);
    }
    getcoursebyID(id)
    {
        return axios.post(Course_API_BASE_URL + "getcoursebyID", id);
    }
    gfchgvjhbkjl(id, q = '', c = '')
    {   
        var a = new updateCourser(id, '','','','', q, c);
        console.log("In ashfuhds", a);
        return axios.post(Course_API_BASE_URL + "asfdsgdhgdfs", a);
    }
    getCourses(){
        return axios.post(Course_API_BASE_URL + "getcourse");
    }
    getStudents()
    {
        return axios.post(Course_API_BASE_URL + "getStudent");
    }
    getLearner()
    {
        return axios.post(Course_API_BASE_URL + "getLearner");
    }

    findCourseByID(id)
    {
        return axios.post(Course_API_BASE_URL + "findCourseByID", new finder(id, ""));
    }


    createCourse(Course){
        return axios.post(Course_API_BASE_URL + 'addCourse', Course);
    }
    createStudent(Student){
        return axios.post(Course_API_BASE_URL + 'addStudent', Student);
    }
    createLearner(Learner){
        return axios.post(Course_API_BASE_URL + 'addLearner', Learner);
    }
    findCourseByIDandUpdate(id, what)
    {
        return axios.post(Course_API_BASE_URL + "findCourseByIDandUpdate", new finder(id, what));
    }
    findLearnerbyCourseID(id)
    {
        return axios.post(Course_API_BASE_URL + "findLearnerbyCourseID", new finder(id, ''));
    }
    findLearnerByStudentID(id)
    {
        console.log("Service Worker ID: ", id)

        return axios.post(Course_API_BASE_URL + "findLearnerByStudentID", new finder(id, ''));
        
    }
    findLearnerByStudentIDandUpdateCourse(id, what){
        return axios.post(Course_API_BASE_URL + "findLearnerByStudentIDandUpdateCourse", new finder(id, ''));
    }
    findLearnerByCourseIDandUpdateStudent(id, what){
        return axios.post(Course_API_BASE_URL + "findLearnerByCourseIDandUpdateStudent", new finder(id, ''));
    }
    
    // EditCourse(Course){
    //     return axios.post(Course_API_BASE_URL + 'EditCourse', Course);
    // }
    // EditStudent(Student){
    //     return axios.post(Course_API_BASE_URL + 'EditStudent', Student);
    // }
    // EditLearner(Learner){
    //     return axios.post(Course_API_BASE_URL + 'EditLearner', Learner);
    // }


    // getCourseById(CourseId){
    //     return axios.get(Course_API_BASE_URL + '/' + CourseId);
    // }

    // updateCourse(Course, CourseId){
    //     return axios.put(Course_API_BASE_URL + '/' + CourseId, Course);
    // }

    // deleteCourse(CourseId){
    //     return axios.delete(Course_API_BASE_URL + '/' + CourseId);
    // }
}

export default new CourseService()
