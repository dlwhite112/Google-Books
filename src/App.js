import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/index"
import Search from "./pages/Search";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search></Search>
          </Route>
          <Route exact path="/books/:id">
            {/* <Detail /> */}
          </Route>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
