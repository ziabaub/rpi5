import React, {Component} from 'react';
import './App.css';
import NavSearch from "./components/NavSearch";
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./route/Search";
import More from "./route/More";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <NavSearch/>
                <Route path="/search" component={Search}/>
                <Route path="/more" component={More}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
