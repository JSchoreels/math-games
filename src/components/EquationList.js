import React, {useState} from "react";
import Equation from "./Equation";

function EquationList({equations, setEquations, incrementScore}) {

    const markForDeletion = (key) => () => {
        setEquations((equations) => equations.filter((elt, i) => i !== key))
        incrementScore()
    }

    return (
        <div className={"EquationList"}>
            {
                equations.map((equation, key) => {
                    return <Equation key={key} repr={equation.repr} solution={equation.solution} markForDeletion={markForDeletion(key)}/>;
                })
            }
        < /div>
    );
}

export default EquationList;