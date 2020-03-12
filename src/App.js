import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <NavBar/>
                <div className='wrapper-content'>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;