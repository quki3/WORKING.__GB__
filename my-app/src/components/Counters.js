import React, { Component } from 'react'
import Counter from './Counter'

class Counters extends React.Component {

    state={
        counters:[
            {id:1,value:3},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
    }
        

    render() { 
        return (
        <>
            
            {this.state.counters.map(counter=>
            <Counter 
                key={counter.id} 
                OnDelete={this.handleDelete}
                value={counter.value} 
                CounId={counter.id}>
                <h3>Title</h3>
            </Counter>)}
        </>
        )
    }

    handleDelete = (id)=>{
        const NewCounters = this.state.counters.filter(c=>c.id !==id)
        this.setState({counters:NewCounters})
    }
}
 
export default Counters;