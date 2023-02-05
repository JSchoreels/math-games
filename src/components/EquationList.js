import React, {useState} from "react";
import Equation from "./Equation";

function EquationList({equations}) {

    return (
        <div className={"EquationList"}>
            {
                equations.map((equation, key) => {
                    return <Equation key={key} a={equation.a} b={equation.b} c={equation.c}/>;
                })
            }
        < /div>
    );
}

export default EquationList;