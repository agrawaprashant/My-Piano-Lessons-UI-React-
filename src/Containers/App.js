import React from "react";
import "../App.css";
import axios from "axios";
import { Route ,Switch } from "react-router-dom";
import Home from "./Home/home.container";
import MediaContainer from "./Media/media.container";

class App extends React.Component {
  render() {
    let routes = <Switch>
      <Route path='/content/:path'  component={MediaContainer} />
      <Route path='/' component={Home} />
    </Switch>

    return routes
  }
}

export default App;
