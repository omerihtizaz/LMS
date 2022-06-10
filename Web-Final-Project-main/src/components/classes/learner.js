export class Learner {
    constructor(id1 = "", title1 = "") {
      this.studentRoll = id1;
      this.courseID = title1;
      this.passed = "false";
      this.pptx_seen = false;
      this.video1_seen = false;
      this.video2_seen = false;
      this.pdf_seen = false;
    }
    create(id1, title1) {
        this.studentRoll = id1;
        this.courseID = title1;
        this.passed = "false";
        this.pptx_seen = false;
        this.video1_seen = false;
        this.video2_seen = false;
        this.pdf_seen = false;
      }
  }
