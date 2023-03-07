import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/src_sounds_play.mp3";
import correct from "../sounds/src_sounds_correct.mp3";
import wrong from "../sounds/src_sounds_wrong.mp3";
import { queries } from "@testing-library/react";

export default function Trivia({data, setStop, questionNumber, setQuestionNumber, setEarned}){
    const [question, setQuestion]=useState(data[questionNumber-1]);
    const [selectedAnswer, setSelectedAnswer]=useState(null);
    const [className, setClassName]=useState("answer");
    const [letsPlay]=useSound(play);
    const [correctAnswer]=useSound(correct);
    const [wrongAnswer]=useSound(wrong);
    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    }, [data, questionNumber]);

    useEffect(()=>{
        letsPlay();
    }, [letsPlay]);
    const handleClick=(a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        setTimeout(()=>{
            setClassName(a.correct?"answer correct":"answer wrong");
        }, 3000);
        setTimeout(()=>{
            if(a.correct){
                correctAnswer();
                setTimeout(()=>{
                    setQuestionNumber((prev)=>prev+1);
                    setSelectedAnswer(null);
                }, 1000);
            }
            else{
                wrongAnswer();
                setTimeout(()=>{
                    setStop(true);
                }, 1000);
            }
        }, 6000)
    };
    return (
        <div className="trivia">
            <div className="question">{question.question}</div>
            <div className="answers">
                <div className={selectedAnswer==question.answers[0]?className:"answer"} onClick={()=>handleClick(question.answers[0])}>{question.answers[0].text}</div>
                <div className={selectedAnswer==question.answers[1]?className:"answer"} onClick={()=>handleClick(question.answers[1])}>{question.answers[1].text}</div>
                <div className={selectedAnswer==question.answers[2]?className:"answer"} onClick={()=>handleClick(question.answers[2])}>{question.answers[2].text}</div>
                <div className={selectedAnswer==question.answers[3]?className:"answer"} onClick={()=>handleClick(question.answers[3])}>{question.answers[3].text}</div>
            </div>
        </div>
    )
}