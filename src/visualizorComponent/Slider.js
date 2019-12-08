import React from 'react';
import "./Slider.css"
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.updateRange = this.updateRange.bind(this);
    }

    updateRange(e) {
        // this.props.updateRange(e.target.size);
        // https://codepen.io/-J0hn-/pen/MOMjQp
    }

    render() {
        // console.log(this.props);
        const { range } = this.props;
        return (
            <div classsName = "slider-container">
                <input id="range" type="range"
                       value={range}
                       min="0"
                       max="20"
                       step="1"
                       onChange={this.updateRange}
                />
                <span id="output">{range}</span>
            </div>
        )
    }
}
export default Slider
