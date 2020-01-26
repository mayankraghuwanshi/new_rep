import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";

import SortVisualizer from "./Components/sorting/SortVisualizer";
import PathfindingVisualizer from "./Components/pathfinding/pathfindingVisualizer";
// function App() {
//     return <Router>
//                 <div className={"App"}>
//                     <Route exact path="/" component = {SortVisualizer}/>
//                     <Route exact path="/pathfinding" component = {PathfindingVisualizer}/>
//                 </div>
//             </Router>
// }

function App() {
    return <div className={"App"}><SortVisualizer/></div>
}


export default App;
