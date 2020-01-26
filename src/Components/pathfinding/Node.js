import React from 'react';
import './node.css'
const Node = ({row,col,isFinish,isStart,isWall})=>{
    const extraClassName = isFinish ? "finish":isWall ? "wall" : isStart ? "start" :"";

    return <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}></div>
}
export default Node;