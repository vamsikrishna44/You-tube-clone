import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'; 
import SearchPage from './SearchPage';
import RecommendedVideos from "./RecommendedVideos";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="App__page">
            <Sidebar />
            
            <SearchPage />
          </div>
        </Route>
        {/* <Route path="/search">
            <h1>Search page</h1>
        </Route> */}
        <Route path="/">
          
          
          <div className="App__page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </Route>
        
      </Switch>
    </Router>
      
      
      
    </div>
  );
}

export default App;
