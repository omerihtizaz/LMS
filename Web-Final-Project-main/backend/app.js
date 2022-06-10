express = require('express')
bodyparser = require('body-parser')
mongoose = require('mongoose')
cors = require('cors')
const { Student, Course, Learner } = require('./model.js');



app = express();          
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


var db = "mongodb://localhost:27017/project";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log("Connected to DB");
      }).catch(()=>{
        console.log("Cannot connect");
          })
// -------------------------------------------Add-------------------------------------------
app.post('/addStudent', (req, res, next)=>{
  // console.log(req.body);
  var st = new Student({name: req.body.name, rollNum: req.body.rollnum} );
  // console.log(st.rollNum)
    st.save(function(err,data){
      if (err)
      {
        console.log(err);
        res.status(500).json({message:"Some Error"})
      }
      else{res.status(200).json({
        message:"Student Added successfully"
      });}
      
    });
});

app.post('/addLearner', (req, res, next)=>{
  console.log(req.body)
  var st = new Learner({studentRoll: req.body.studentRoll, courseID: req.body.courseID
  , pptx_seen: false, pdf_seen : false, video1_seen: false, video2_seen: false, passed: "false"} );
  console.log(st)
    st.save(function(err,data){
      if (err)
      {
        console.log(err);
        res.status(500).json({message:"Some Error"})
      }
      else{res.status(200).json({
        message:"Learner Added successfully"
      });}
      
    });
});

app.post('/addCourse', (req, res, next)=>{
  var st = new Course(req.body);
    st.save(function(err,data){
      if (err)
      {
        console.log(err);
        res.status(500).json({message:"Some Error"})
      }
      else{res.status(200).json({
        message:"Added successfully"
      });}
    });
});
// -------------------------------------------Get-------------------------------------------
app.post('/getcourse', (req, res, next)=>{
    Course.find().then(documents=>{
      res.status(200).json({
        message:"Fetched successfully",
        Courses:documents
      });
    })
});
app.post('/getcoursebyID', (req, res, next)=>{
  Course.find({courseID: req.body.id}).then(documents=>{
    res.status(200).json({
      message:"Fetched successfully",
      Courses:documents
    });
  })
});
app.post('/getStudent', (req, res, next)=>{
  Student.find().then(documents=>{
    // console.log("Students are as follows: ", documents)
    res.status(200).json({
      message:"Fetched successfully",
      Students:documents
    });
  })
});
app.post('/getLearner', (req, res, next)=>{
  Learner.find().then(documents=>{
    res.status(200).json({
      message:"Fetched successfully",
      Learners:documents
    });
  })
});

// -------------------------------------------Find-------------------------------------------
app.post('/findCourseByID', (req, res, next)=>{
  console.log(req.body.id)
  Course.find({id: req.body.id}).then(documents=>{
    res.status(200).json({
      message:"Fetched successfully",
      crs:documents
    });
  })
});
app.post('/findLearnerbyCourseID', (req, res, next)=>{
  // console.log(req.body.id)
  Learner.find({courseID: req.body.id}).then(documents=>{
    // console.log(documents)
    res.status(200).json({
      message:"Fetched successfully",
      crs:documents
    });
  })
});
app.post('/findLearnerByStudentID', (req, res, next)=>{
  // console.log(req.body.id)
  Learner.find({studentRoll: req.body.id}).then(documents=>{
    // console.log(documents)
    res.status(200).json({
      message:"Fetched successfully",
      crs:documents
    });
  })
});
// -------------------------------------------Update-------------------------------------------
app.post('/findCourseByIDandUpdate', (req, res, next)=>{
  // console.log(req.body)
  Course.findByIdAndUpdate(req.body.id, {pptx: req.body.what}),function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User: ", docs);
    }
  }
});
app.post('/findLearnerByStudentIDandUpdateCourse', (req, res, next)=>{
  // console.log(req.body)
  Course.findByIdAndUpdate({studentRoll:req.body.id}, {courseID: req.body.what}),function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User: ", docs);
    }
  }
});

app.post('/asfghfgfsd', (req, res, next)=>{
  console.log(req.body)
    Course.findOneAndUpdate({id:req.body.id}, {pdf: req.body.pdf, 
    pptx: req.body.pptx, video1: req.body.v1, video2: req.body.v2}).then((docs)=>{
      if(docs) {
        console.log(docs)
         console.log('resolve({success:true,data:docs});')
      } else {
         console.log('{success:false,data:"no such user exist"}');
      }
  })
  });
  app.post('/asfdsgdhgdfs', (req, res, next)=>{
    console.log(req.body)
      Course.findOneAndUpdate({id:req.body.id}, {quiz: req.body.q, 
        answers: req.body.c}).then((docs)=>{
        if(docs) {
          console.log(docs)
           console.log('resolve({success:true,data:docs});')
        } else {
           console.log('{success:false,data:"no such user exist"}');
        }
    })
    });
  app.post('/gfchgvjhbkjl', (req, res, next)=>{
    console.log("gfchgvjhbkjl");
      Course.findByIdAndUpdate().then((docs)=>{
        if(docs) {
          console.log(docs)
           console.log('resolve({success:true,data:docs});')
        } else {
           console.log('{success:false,data:"no such user exist"}');
        }
    })
    });
app.post('/findLearnerByCourseIDandUpdateStudent', (req, res, next)=>{
  // console.log(req.body)
  Course.findByIdAndUpdate({courseID:req.body.id}, {studentRoll: req.body.what}),function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User: ", docs);
    }
  }
});
app.post('/findLearnerByCourseIDandUpdateCourse', (req, res, next)=>{
  // console.log(req.body)
  Course.findByIdAndUpdate({courseID:req.body.id}, {courseID: req.body.what}),function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User: ", docs);
    }
  }
});
module.exports = app;





// const deleteAllData = async () => {
//   try {
//     // await Course.deleteMany();
//     // await Student.deleteMany();
//     await Learner.deleteMany();
    
//     console.log('All Data successfully deleted');
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteAllData()
