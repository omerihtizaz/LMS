import React, { useState } from 'react';
import './Quiz.css';

export default function Quiz() {
    const[incor,setincor]=useState(0);
    const[status,setstaus]=useState(0);
    const[grade,setGrade]=useState(0);
	const [answer,setanswer] =useState([]);
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect,ans) => {
		// clearTimeout(handleAnswerOptionClick);
		// document.getElementById("time").style.visibility="hidden";
		console.log(questions.length)
		setanswer(answer => [...answer, ans]);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			// document.getElementById("time").style.width="100%";
			// document.getElementById("time").style.visibility="visible";
		} else {
			setShowScore(true);
		}
		if (isCorrect) {
			setScore(score + 1);
		}
		console.log("score",score)
		setincor(questions.length - score);
        var per = (score/questions.length)*100;
		if((score/questions.length)*100 < 25){
			console.log((score/questions.length)*100);
            setGrade("F")
            setstaus("Fail");
        }
		else{
			console.log((score/questions.length)*100);
			if((score/questions.length)*100 >= 25 && (score/questions.length)*100 <= 50){
				setGrade("C")
			}
			else if((score/questions.length)*100 >= 50 && (score/questions.length)*100 < 75){
				setGrade("B")
			}
			else if((score/questions.length)*100 >= 75){
				setGrade("A")
			}
			setstaus("Pass");
		}
		// console.log(per);
        // console.log(answer)
	};
    // setTimeout(handleAnswerOptionClick, 5000)
	// const ques = 0;
	return (
        <>
		<span>You will be given 5 seconds for each question</span><br/>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					{/* <text>You scored {score} out of {questions.length}</text><br/> */}
                    {/* <text>The correct answers were:</text><br/>
					{answer.map((item)=>(
						<>
						<text>{item}</text><br/>
						</>
					))} */}
                    <text>Number of correct answers were: {score}</text><br/>
                    <text>Number of incorrect answers were: {questions.length-score}</text><br/>
                    <text>Status: {status}</text><br/>
                    <text>Grade: {grade}</text>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
					{/* <div id="time" class="timer"></div> */}
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='btn btn-1 btn-sep icon-info' onClick={() => handleAnswerOptionClick(answerOption.isCorrect,answerOption.answerText)}>{answerOption.answerText}</button>
						))}
					</div>
                    <br/>
				</>
			)}
		</div>
        {/* <div id="time" class="timer" style={{visibility:"hidden"}}></div> */}
        </>
	);
}








