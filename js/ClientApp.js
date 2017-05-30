/* global React ReactDOM */

var ce = React.createElement;

// prettier-ignore
var MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', null, props.title)
    )
  );
};

// prettier-ignore
var MyFirstComponent = function () {
  return (
    ce('div', null,
      ce(MyTitle, {title: 'House of Cards'}),
      ce(MyTitle, {title: 'Orange is the New Black'}),
      ce(MyTitle, {title: 'Stranger Things'})
    )
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
