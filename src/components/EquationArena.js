import React, {useState} from 'react';
import EquationList from "./EquationList";
import {equationGenerator} from "./EquationGenerator";


function EquationArena(props) {
    const [equations, setEquations] = useState([])
    const addRandomEquation = () => {
        setEquations([...equations, equationGenerator()])
    }
    return (
        <>
            <h2>Welcome to Equation Arena !</h2>
            Are you ready ? <button onClick={addRandomEquation}>Let's Go !</button>
            <EquationList equations={equations}/>
        </>
    );
}

export default EquationArena;