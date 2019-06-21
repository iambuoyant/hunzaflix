import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/header";
import Home from "./components/Home";
import User from "./components/user";
import UserLogin from "./components/userlogin";
import Dashboard from "./components/dashboard";
import Posts from "./api/posts";
// import Movies from "./containers/Movies";
import AllMovies from "./containers/AllMovies";
import Movie from "./containers/Movie";
const PrivateRoute = ({ isLogged, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isLogged ? <Comp {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/publish" exact component={Posts} />
          <Route path="/movies" exact component={AllMovies} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/register" exact component={User} />
          {/* <Route path="/login" exact component={UserLogin} {...props} /> */}
          {/* <PrivateRoute
            isLogged={props.auth}
            path="/dashboard"
            exact
            component={Dashboard}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
