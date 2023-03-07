import React from "react";
import { useEffect, useState } from "react";
import "./app.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [userName, setUserName]=useState(null);
  const [questionNumber, setQuestionNumber]=useState(1);
  const [stop, setStop]=useState(false);
  const [earned, setEarned]=useState("Rs. 0");
  const data = [
    {
      id: 1,
      question: "Which day is observed as World Standards Day?",
      answers: [
        {
          text: "Nov 15",
          correct: false,
        },
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Dec 2",
          correct: false,
        },
        {
          text: "June 26",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is celebrated on September 27 every year?",
      answers: [
        {
          text: "National Integration Day",
          correct: false,
        },
        {
          text: "Teachers' Day",
          correct: false,
        },
        {
          text: "International Literacy Day",
          correct: false,
        },
        {
          text: "World Tourism Day",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "How many miles is the Sun approximately away from the Earth?",
      answers: [
        {
          text: "93 million",
          correct: true,
        },
        {
          text: "9.3 million",
          correct: false,
        },
        {
          text: "193 million",
          correct: false,
        },
        {
          text: "39 million",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Since 2002, what is the currency of Greece?",
      answers: [
        {
          text: "Drachma",
          correct: false,
        },
        {
          text: "Peso",
          correct: false,
        },
        {
          text: "Euro",
          correct: true,
        },
        {
          text: "Lira",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which ship was not a part of Christopher Columbus's first voyage in 1492?",
      answers: [
        {
          text: "Santa Maria",
          correct: false,
        },
        {
          text: "Nina",
          correct: false,
        },
        {
          text: "La Gorda",
          correct: true,
        },
        {
          text: "Pinta",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How many states of U.S.A are not attached to the mainland?",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "1",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Pakistan's Nuclear Plant is located in",
      answers: [
        {
          text: "Kahuta",
          correct: true,
        },
        {
          text: "Rawalpindi",
          correct: false,
        },
        {
          text: "Lahore",
          correct: false,
        },
        {
          text: "None of these",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which country does not have a monarch?",
      answers: [
        {
          text: "Britain",
          correct: false,
        },
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "Afghanistan",
          correct: true,
        },
        {
          text: "Bhutan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The term 'computer bug' was inspired from a",
      answers: [
        {
          text: "Fly",
          correct: false,
        },
        {
          text: "Roach",
          correct: false,
        },
        {
          text: "Japanese Beetle",
          correct: false,
        },
        {
          text: "Moth",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following scientists does not have a chemical name after him?",
      answers: [
        {
          text: "Enrico Fermi",
          correct: false,
        },
        {
          text: "Isaac Newton",
          correct: true,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
        {
          text: "Niels Bohr",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which African country was the first to get Independence?",
      answers: [
        {
          text: "Ghana",
          correct: true,
        },
        {
          text: "Nigeria",
          correct: false,
        },
        {
          text: "Zimbabwe",
          correct: false,
        },
        {
          text: "Congo",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The currency of Hong Kong is",
      answers: [
        {
          text: "H. Dollar",
          correct: true,
        },
        {
          text: "H. Pound",
          correct: false,
        },
        {
          text: "Rouble",
          correct: false,
        },
        {
          text: "Dinar",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which country was elected out of the European Union?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Norway",
          correct: true,
        },
        {
          text: "Belgium",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Space shuttle named 'Atlantis' was launched by",
      answers: [
        {
          text: "America",
          correct: true,
        },
        {
          text: "Britain",
          correct: false,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid=[
    {id:1, amount:1000},
    {id:2, amount:2000},
    {id:3, amount:5000},
    {id:4, amount:10000},
    {id:5, amount:20000},
    {id:6, amount:40000},
    {id:7, amount:80000},
    {id:8, amount:160000},
    {id:9, amount:320000},
    {id:10, amount:640000},
    {id:11, amount:1250000},
    {id:12, amount:2500000},
    {id:13, amount:5000000},
    {id:14, amount:10000000}
  ].reverse();
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount);
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      {userName?(
        <>
          <div className="main">
        {stop || questionNumber>14?<h1 className="endText">You Earned: Rs. {earned}</h1>:(
          <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottm">
          <Trivia data={data} 
          setStop={setStop} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setEarned={setEarned}
          />
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
            {moneyPyramid.map((m)=>(
              <li className={m.id===questionNumber?"moneyListItem active":"moneyListItem"}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">Rs. {m.amount}</span>
              </li>
            ))}
        </ul>
      </div>
        </>
      ):<Start setUserName={setUserName}/>}
    </div>
  );
}

export default App;
