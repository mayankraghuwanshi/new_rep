import React, {Component} from 'react';
import './Visualizer.css';

const SPEED = 10;
const SIZE=100;
class Visualizor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr : [],
            swap : 0
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const size=SIZE;
        const min=5;
        const max=300;
        const arr = [];
        for(let i=0;i<size;i++){
            arr.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        this.setState({arr});
    }
    compareHelper(barOneStyle , barTwoStyle){
        barOneStyle.backgroundColor="red";
        barTwoStyle.backgroundColor="red";
        // barOneStyle.backgroundColor="#0074D9";
        // barTwoStyle.backgroundColor="#0074D9";
        console.log("comparing")

    }
    bubbleSort(){
        const objArr = []
        let arr = this.state.arr;
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                objArr.push({case : 1,start : i,end : j})
                if(arr[i]<arr[j]){
                    objArr.push({case : 2 , start : i , end : j , barOneHeight : `${arr[j]}px`,barTwoHeight : `${arr[i]}px`})
                    const temp = arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }else {
                    objArr.push({case: 3, start: i, end: j})
                }
                objArr.push({case: 5, start: i, end: j})
            }
            objArr.push({case : 4,start : i})
        }
        return objArr;
    }
    sortHelper(){
        const barArr = document.getElementsByClassName("array-bars");
        const arr=this.bubbleSort()
        // console.table(arr)
        for(let i=0;i<arr.length;i++){
            const obj = arr[i];
            switch (obj.case) {
                //just compare.
                case 1 : setTimeout(()=>{
                    const startIdx = obj.start
                    const endIdx = obj.end
                    const barOneStyle = barArr[startIdx].style;
                    const barTwoStyle = barArr[endIdx].style;
                    barOneStyle.backgroundColor="red";
                    barTwoStyle.backgroundColor="red";
                },i*SPEED)
                    break;
                //swap
                case 2 : setTimeout(()=>{
                    const startIdx = obj.start
                    const endIdx = obj.end
                    const barOneStyle = barArr[startIdx].style;
                    const barTwoStyle = barArr[endIdx].style;
                    barOneStyle.backgroundColor="yellow";
                    barTwoStyle.backgroundColor="yellow";
                    barOneStyle.height=obj.barOneHeight;
                    barTwoStyle.height=obj.barTwoHeight;
                },i*SPEED)
                    break;
                //if are alredy sorted.
                case 3 : setTimeout(()=>{
                    const startIdx = obj.start
                    const endIdx = obj.end
                    const barOneStyle = barArr[startIdx].style;
                    const barTwoStyle = barArr[endIdx].style;
                    barOneStyle.backgroundColor="green";
                    barTwoStyle.backgroundColor="green";
                },i*SPEED)
                    break;
                //color sorted bars.
                case 4 : setTimeout(()=>{
                    const startIdx = obj.start;
                    const barOneStyle = barArr[startIdx].style;
                    barOneStyle.backgroundColor="black";
                },i*SPEED)
                    break;
                case 5: setTimeout(()=>{
                    const startIdx = obj.start
                    const endIdx = obj.end
                    const barOneStyle = barArr[startIdx].style;
                    const barTwoStyle = barArr[endIdx].style;
                    barOneStyle.backgroundColor="#0074D9";
                    barTwoStyle.backgroundColor="#0074D9";
                },i*SPEED)
            }
        }
    }

    render() {
        const arr = this.state.arr;
        return (
            <div><h1>{swap}</h1>
                <div className="array-container">
                    {arr.map(item=>(
                         <div className="array-bars" style={{height : `${item}px`}}></div>))}<br/>
                <button onClick={()=>this.resetArray()}>Reset</button>
                <button onClick={()=>this.sortHelper()}>Change</button>

                </div>
            </div>
        );
    }
}

export default Visualizor;