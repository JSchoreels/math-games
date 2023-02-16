import React, {useEffect, useState} from 'react';
import EquationList from "./EquationList";
import {equationGenerator} from "./EquationGenerator";
import './EquationArena.scss'

function EquationArena(props) {
    const [equations, setEquations] = useState([])
    const [gameOn, setGameOn] = useState(false);
    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore((score) => score+1);
    }

    const addRandomEquation = () => {
        setEquations(
            (equations) => {
                console.log(equations)
                return equations.filter(e => e.className !== 'solved')
            }
        )
        setEquations(
            (equations) => [...equations, equationGenerator()]
        )
    }


    useEffect(() => {
        if(gameOn){
            addRandomEquation();
            const interval = setInterval(addRandomEquation,2000);
            return () => clearInterval(interval);
        }
    }, [gameOn]);

    const toggleGeneration = () => {
        setGameOn(!gameOn);
    }

    return (
        <div className={`EquationArena ${gameOn ? 'active' : ''}`}>
            <h2>Welcome to Equation Arena !</h2>
            Are you ready ? <button onClick={toggleGeneration}>Let's Go !</button> Score : {score}
            <EquationList equations={equations} setEquations={setEquations} incrementScore={incrementScore}/>
        </div>
    );
}

export default EquationArena;