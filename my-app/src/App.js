import React, { Component } from 'react';
//router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import Counter from './components/Counter';
import Counters from './components/Counters'
import Nav from './components/Nav'
import UserData from './components/UserData';

class App extends React.Component {

    constructor(props){
        super();
        this.state = {
            
        }
       
    }
    render() { 
        
       

        return (
        <>
        <Nav/>
        <Router>
            <Switch>
            <Route exact path="/" component={Counters}/>
            <Route exact path="/user" component={UserData}/>

            <Route path="*" render={()=><h1>404</h1>}/>
            </Switch>
        </Router>
        
        </>
        )
    }
}
 
export default App;