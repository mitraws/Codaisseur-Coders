import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
