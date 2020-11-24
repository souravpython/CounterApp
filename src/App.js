import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters:[{id:1,value:0},
              {id:2,value:0},
              {id:3,value:0},
              {id:4,value:0}
            ]
  }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters:counters});
    }

    handleReset = () =>{
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        })
        this.setState({counters:counters});
    }

    handleIncrement = counter => {
        //Incrementing counter using id
        const counters = this.state.counters.map(c=>{
            if(c.id===counter.id){
                c.value++;
            }
            return c;
        })
        this.setState({counters:counters});

    }

    handleDecrement = counter => {
        //Decrementing counter using reference
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if (counters[index].value > 0) counters[index].value--;
        this.setState({counters:counters});
    }
 
  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} counters={this.state.counters}/>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;