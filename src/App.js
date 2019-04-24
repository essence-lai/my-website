import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index';
import Contact from './components/contact/index';
import ReallySmoothScroll from 'really-smooth-scroll';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReallySmoothScroll.shim();


class App extends Component{
    render(){
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                    </div>
                </Router>
            </Provider>
        );

    }
}

export default App;
