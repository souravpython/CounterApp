import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        const {onReset, onDelete, onIncrement, onDecrement, counters} = this.props;
        return ( 
            <div>  <button className="btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                    {counters.map(counter =>
                    <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>)}
            </div>
         );
    }

    
}
 
export default Counters;