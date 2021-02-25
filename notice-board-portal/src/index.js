import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import CreateNotice from './pages/CreateNotice';
import ViewNotices from './pages/ViewNotices';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
          <Route path="/" component={CreateNotice} exact />
          <Route path="/create-notice" component={CreateNotice} />
          <Route path="/view-notices" component={ViewNotices} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
