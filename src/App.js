import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import UserList from "./components/UserList";
import UserShow from "./components/UserShow";
const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={UserList} />
        <Route exact path="/users/:id" component={UserShow} />
      </Container>
    </Router>
  );
};

export default App;
