import React, { Component } from 'react';

class Counter extends Component {



    render() { 
        return ( 
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button className="btn btn-secondary btn-sm m-2 " onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
            <button className={this.disableButton()} onClick={()=>this.props.onDecrement(this.props.counter)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>
        );
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    disableButton = () =>{
        let classes = "btn btn-secondary btn-sm ";
        classes += (this.props.counter.value === 0) ? "disabled":""
        return classes;
    }

    formatCount = () => {
        const {value} = this.props.counter;
        return value === 0?'Zero':value;
    }

}
 
export default Counter;