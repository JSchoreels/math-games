import './App.css';
import MainMenu from "./components/MainMenu";
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import * as React from "react";
import EquationArena from "./components/EquationArena";


function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<MainMenu/>}/>
                    <Route path={'/EquationArena'} element={<EquationArena/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
