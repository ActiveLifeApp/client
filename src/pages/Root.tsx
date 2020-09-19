import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from 'pages';

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <p>homepage</p>} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default Root;
