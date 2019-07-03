import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index';
import Contact from './components/contact/index';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();


class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </Router>
        );

    }
}

export default App;
