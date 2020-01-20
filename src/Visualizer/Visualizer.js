import React, {Component} from 'react';
import './Visualizer.css';
import bubbleSort from '../Algorithm/bubbleSort'
import insertionSort from '../Algorithm/insertionSort'
import selectionSort from '../Algorithm/selectionSort'
import driver from "./driver"

class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr : [],
            active : false,
            SPEED: 10,
            SIZE : 60,
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const size=this.state.SIZE;
        const min=15;
        const max=500;
        const arr = [];
        for(let i=0;i<size;i++){
            arr.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        this.setState({arr});
    }
    visualize(sortingAlgo){
        driver(this.state.arr,sortingAlgo,this.state.SPEED,this.state.SIZE);
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
        const BOX_SIZE = Math.floor(700/SIZE);
        return (
            <div>
                <div className="Headder">
                    <div style={{width : "700px" , margin : "auto"}}>
                        <input className={"button"}
                               type="button"
                               value={"Reset"}
                               onClick={()=>this.resetArray()}
                        />
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>this.visualize(bubbleSort)}
                               value={"Bubble Sort"}
                        />
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>this.visualize(insertionSort)}
                               value={"Insertion Sort"}/>
                        <input className={"button"}
                               type={"button"}
                               onClick={()=>this.visualize(selectionSort)}
                               value={"Selection Sort"}/>
                        <input className="slider" type={"range"} value={this.state.SIZE} min = "20" max = "100" onChange={(e)=>this.onSlideHandler(e)}/>
                    </div>
                </div>

                <div className="array-container"
                     style={{width : `${(BOX_SIZE+2)*SIZE}px`}}>
                    {arr.map((item , index)=>(
                        <div key={index}
                             className="array-bars"
                             style={{height : `${item}px` ,width : `${BOX_SIZE}px`}}>
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