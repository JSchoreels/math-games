import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router-dom";

function MainMenu() {
    return (
        <>
            <h1>Welcome to Math Games !</h1>
            <h2>What will be your next challenge ?</h2>
            <Link to={'EquationArena'}>Take me to the Equation Arena !</Link>
        </>
    );
}

export default MainMenu;