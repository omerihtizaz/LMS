import React from "react";
import ReactDOMServer from "react-dom/server";
import {jsPDF} from "jspdf";
const doc = new jsPDF();
var Foo = <b>Congragulations you have passed the course from our Online LMS Well Done!!</b>;
export default function CoureDash() {
    const save = () => {
        console.log(Foo)
      doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
        callback: () => {
          doc.save("myDocument.pdf");
        }
      });
    };
  
    return (
      <div>
        <button  className='btn btn-1 btn-sep icon-info' onClick={save}>save</button>
      </div>
    );
  }
