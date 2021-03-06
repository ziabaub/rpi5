import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./route/Search";
import More from "./route/More";
import {SearchInit} from "./forms/formicForm";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <SearchInit/>
                <Route path="/search" component={Search}/>
                <Route path="/more" component={More}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
