import React, { Component} from 'react';
import './style.css';


class Counter extends Component{
    /*constructor para bindear las funciones ej. handleIncrement
    constructor(){
        super();
        
        this.handleIncrement = this.handleIncrement.bind(this);
        console.log('constructor',this);
    }*/
    
    state = {
        count:this.props.value,
        imgUrl:'https://picsum.photos/200',
        tags:[]
    };
    styles={
        fontSize: 30,
    }

    render(){

        console.log('props',this.props);

        return (
        <>
        {this.props.children} @ {this.props.CounId}
        <img src={this.state.imgUrl} alt=''></img>
        <span style={this.styles} className={this.GetClass()}>{this.Change()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={()=>this.props.OnDelete(this.props.CounId)} >Delete</button>
        {this.RenderTags()}
        
        </>
        )
    }

    Change(){
        return this.state.count === 0? 'zero': this.state.count;
    }

    //dandole una clase dependiendo de un stado
    GetClass(){
        let classes = "primary";
        classes = this.state.count === 0 ? "warning":"primary";
        return classes;
    }

    RenderTags(){
        if(this.state.tags.length === 0)return <p>they are no tags</p>
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement=()=>{
        console.log('Increment Clicked!',this);
        //para poder mutar el state usamos setState
        this.setState({
            count:this.state.count + 1
        })
    }
}

export default Counter;