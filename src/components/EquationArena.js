import React, {useState} from 'react';
import EquationList from "./EquationList";

function EquationArena(props) {
    const [equations, setEquations] = useState([])
    const addRandomEquation = () => {
        setEquations([...equations, {'a':1, 'b':equations.length, 'c':3}])
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