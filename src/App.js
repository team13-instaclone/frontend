import React from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configStore";
import { Cookies } from "react-cookie";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
  const cookies = new Cookies();
  const loginState = cookies.get("is_login");

  return (
    <ConnectedRouter history={history}>
      {loginState ? (
        <Route path="/" exact component={Main} />
      ) : (
        <Route path="/login" exact component={Login} />
      )}
      <Route path="/signup" exact component={Signup} />
    </ConnectedRouter>
  );
}

export default App;
