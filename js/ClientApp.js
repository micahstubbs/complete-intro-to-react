import React from 'react';
import { render } from 'react-dom';

import MyTitle from './MyTitle';

var ce = React.createElement;

// prettier-ignore
var MyFirstComponent = function () {
  return (
    ce('div', null,
      // change MyFirstComponent inside div
      ce(MyTitle, {color: 'rebeccapurple', title: 'House of Cards'}),
      ce(MyTitle, {color: 'peru', title: 'Orange is the New Black'}),
      ce(MyTitle, {color: 'burlywood', title: 'Stranger Things'})
    )
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
