import React from "react";
import HomePage from "./pages/HomePage";
import PostPage from "./components/PostPage";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
