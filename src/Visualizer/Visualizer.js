import React, {Component} from 'react';
import {useState} from "react";
import './Visualizer.css';
import bubbleSort from '../Algorithm/bubbleSort'
import insertionSort from '../Algorithm/insertionSort'
import selectionSort from '../Algorithm/selectionSort'
import driver from "./driver"

function print() {
    console.log("hello")
}
class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr : [],
            disable : false,
            SPEED: 10,
            SIZE : 60,
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const size=this.state.SIZE;
        const min=20;
        const max=500;
        const arr = [];
        for(let i=0;i<size;i++){
            arr.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        this.setState({arr});
        this.colorReset()

    }
    colorReset(){
        const barArr = document.getElementsByClassName("array-bars");
        const arr = this.state.arr;
        for(let i=0;i<arr.length;i++){
            barArr[i].style.backgroundColor="#0074D9";
        }
    }

    visualize(sortingAlgo,print){
        this.setState({disable : true})
        driver(this.state.arr,sortingAlgo,this.state.SPEED,this.state.SIZE,this.enableButton);
        setTimeout(()=>this.setState({disable : false}),10000)
    }

    onSlideHandler(e){
        this.setState({SIZE : e.target.value});
        this.resetArray()
    }


    render() {
        const arr = this.state.arr;
        // const active = this.state.active;
        // const SPEED = this.state.SPEED;
        const SIZE = this.state.SIZE;
        const BOX_SIZE = Math.floor(800/SIZE);
        const disable = this.state.disable
        return (
            <div>
                <div className="Headder">
                    <div style={{width : "700px" , margin : "auto" }}>
                        <input className={"button"}
                               type="button"
                               value={"Reset"}
                               onClick={()=>disable?"":this.resetArray()}
                               style={{cursor : `${disable?"wait":"pointer"}`}}
                        />
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>disable?"":this.visualize(bubbleSort)}
                               value={"Bubble Sort"}
                               style={{cursor : `${disable?"wait":"pointer"}`}}
                        />
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>disable?"":this.visualize(insertionSort)}
                               value={"Insertion Sort"}
                               style={{cursor : `${disable?"wait":"pointer"}`}}
                        />
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>disable?"":this.visualize(selectionSort)}
                               value={"Selection Sort"}
                               style={{cursor : `${disable?"wait":"pointer"}`}}
                        />
                        <input className="slider" type={"range"} value={this.state.SIZE} min = "20" max = "100" onChange={(e)=>this.onSlideHandler(e)} disabled={disable}/>
                    </div>
                </div>

                <div className="array-container"
                     style={{width :"100%"}}>
                    {arr.map((item , index)=>(
                        <div key={index}
                             className="array-bars"
                             style={{fontSize : `${BOX_SIZE/3}px`,  height : `${item}px` ,width : `${BOX_SIZE}px`}}>
                            {item}
                        </div>))}
                </div>
                <div class = "footer">
                    <p align="center" style={{fontSize : "18px" ,lineHeight : "20vh" }}>Beta Version Made in <span style={{color: "red"}}>&#9829;</span> with Mayank Raghuvanshi</p>
                </div>
            </div>
        );
    }
}

export default Visualizer;