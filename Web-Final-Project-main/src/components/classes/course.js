export class Course {
    constructor(id,title,overview,allowDownload,difficultyLevel,OfferedBy,video1,video2,pdf,pptx,ques,ans1,ans2,ans3,ans4,corr_ans,criteria) {
      this.id = id;
      this.title = title;
      this.overview = overview;
      this.allowDownload = allowDownload;
      this.difficultyLevel = difficultyLevel;
      this.OfferedBy = OfferedBy;
      this.video1 = video1;
      this.video2 = video2;
      this.pdf = pdf;
      this.pptx = pptx;
      this.question = ques;
      this.ans1 = ans1;
      this.ans2 = ans2;
      this.ans3 = ans3;
      this.ans4 = ans4;
      this.corr_ans = corr_ans;
      this.criteria = criteria;
    }
    create(id,title,overview,allowDownload,difficultyLevel,OfferedBy,video1,video2,pdf,pptx,ques,ans1,ans2,ans3,ans4,corr_ans,criteria) {
      this.id = id;
      this.title = title;
      this.overview = overview;
      this.allowDownload = allowDownload;
      this.difficultyLevel = difficultyLevel;
      this.OfferedBy = OfferedBy;
      this.video1 = video1;
      this.video2 = video2;
      this.pdf = pdf;
      this.pptx = pptx;
      this.question = ques;
      this.ans1 = ans1;
      this.ans2 = ans2;
      this.ans3 = ans3;
      this.ans4 = ans4;
      this.corr_ans = corr_ans;
      this.criteria = criteria;
      }
      // copy(course)
      // {
      //   this.id = course.id;
      //   this.title = course.title;
      //   this.name = course.name;
      //   this.allowDownload = course.allowDownload;
      //   this.difficultyLevel = course.difficultyLevel;
      //   this.OfferedBy = course.OfferedBy;
      //   this.video1 = course.video1;
      //   this.video2 = course.video2;
      //   this.pdf = course.pdf;
      //   this.pptx = course.pptx;
      //   this.answers = course.answers;
      //   this.quiz = course.quiz;
      // }
  }
