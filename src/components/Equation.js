
import "./Equation.scss"
import {useState} from "react";
function Equation({repr, solution, markForDeletion}) {

    const checkSolution = (e) => {
        console.log(e.target.value, solution)
        if (parseInt(e.target.value) === solution){
            markForDeletion();
            e.target.value = '';
        }
    }

    return (
        <div className={`Equation`}>
            <p>{repr}</p>
            <input onInput={checkSolution}/>
        </div>
    )
}

export default Equation