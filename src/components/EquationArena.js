import React, {useEffect, useState} from 'react';
import {equationGenerator} from "./EquationGenerator";
import './EquationArena.scss'
import Equation from "./Equation";

function EquationArena(props) {

    const INITIAL_DELAY = 5000;

    const [equations, setEquations] = useState([])
    const [gameOn, setGameOn] = useState(false);
    const [score, setScore] = useState(0);
    const [intervalId, setIntervalId] = useState(5000)

    const computeDelay = (score) => {
        return INITIAL_DELAY / (1 + score / 10.)
    }
    const incrementScore = () => {
        setScore((score) => score+1);
        clearInterval(intervalId);
        setIntervalId(setInterval(addRandomEquation, computeDelay(score)))
    }

    const addRandomEquation = () => {
        setEquations(
            (equations) => [...equations, equationGenerator()]
        )
    }


    useEffect(() => {
        if(gameOn){
            addRandomEquation();
            const interval = setInterval(addRandomEquation,INITIAL_DELAY);
            setIntervalId(interval);
            return () => clearInterval(interval);
        }
    }, [gameOn]);

    const toggleGeneration = () => {
        setGameOn(!gameOn);
    }

    const markForDeletion = (key) => () => {
        setEquations((equations) => {
            const result = equations.filter((elt, i) => i !== key)
            if (result.length === 0){
                addRandomEquation();
            }
            return result
        })
        incrementScore()
    }

    return (
        <div className={`EquationArena ${gameOn ? 'active' : ''}`}>
            <h2>Welcome to Equation Arena !</h2>
            Are you ready ? <button onClick={toggleGeneration}>Let's Go !</button> Score : {score}
            <div className={"EquationList"}>
                {
                    equations.map((equation, key) => {
                        return <Equation key={key} repr={equation.repr} solution={equation.solution} markForDeletion={markForDeletion(key)}/>;
                    })
                }
            < /div>
        </div>
    );
}

export default EquationArena;