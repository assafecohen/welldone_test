import React from 'react';
import './App.css';
import Layout from "./Layout/Layout";
import { Route, Switch } from "react-router";
import Categories from "./containers/Categories/Categories";
import Home from "./containers/Home/Home";

const App = props =>  {
    const routes = (
        <Switch>
            <Route exact  path='/' component={Home} />
            <Route exact  path='/locations' component={Categories} />
        </Switch>
    )
  return (
        <Layout>
            {routes}
        </Layout>
  );
}

export default App;
