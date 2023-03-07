import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import wrong from "../sounds/src_sounds_wrong.mp3";

export default function Timer({setStop, questionNumber}){
    const [timer, setTimer]=useState(30);
    const [wrongAnswer]=useSound(wrong);
    useEffect(()=>{
        if(timer===0){
            wrongAnswer();
            return setStop(true);
        }
        const interval=setInterval(()=>{
            setTimer((prev)=>prev-1);
        }, 1000);
        return ()=>clearInterval(interval);
    });

    useEffect(()=>{
        setTimer(30);
    }, [questionNumber])

    return timer;
}