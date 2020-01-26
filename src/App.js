import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";

import SortVisualizer from "./Components/sorting/SortVisualizer";
import PathfindingVisualizer from "./Components/pathfinding/pathfindingVisualizer";
function App() {
    return <Router>
                <div className={"App"}>
                    <Route path="/" exact component = {SortVisualizer}/>
                    <Route path="/pathfinding" exact component = {PathfindingVisualizer}/>
                </div>
            </Router>
}

// function App() {
//     return <div className={"App"}><PathfindingVisualizer/></div>
// }


export default App;
