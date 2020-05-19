import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
