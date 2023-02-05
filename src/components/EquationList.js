import React, {useState} from "react";
import Equation from "./Equation";

function EquationList({equations}) {

    return (
        <div className={"EquationList"}>
            {
                equations.map((equation, key) => {
                    return <Equation key={key} repr={equation.repr} solution={equation.solution}/>;
                })
            }
        < /div>
    );
}

export default EquationList;