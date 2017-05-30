/* global React ReactDOM */

var MyTitle = function() {
  // prettier-ignore
  return React.createElement('div', null,
    React.createElement('h1', null, 'Check out this component!')
  );
};

// prettier-ignore
var MyFirstComponent = function() {
  return React.createElement('div', null,
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
