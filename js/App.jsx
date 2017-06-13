// @flow

import React from 'react';
import type { Match } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route component={FourOhFour} />
        <Route
          path="/details/:id"
          component={// prettier-ignore
          (props: { match: Match }) => { // eslint-disable-line react/no-unused-prop-types
            const selectedShow = preload.shows.find(
              // prettier-ignore
              (show: Show) => props.params.id === show.imdbID // eslint-disable-line react/prop-types
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />

      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
