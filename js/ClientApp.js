/* global React ReactDOM */

var ce = React.createElement;

// prettier-ignore
var MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', {style: {color: props.color}}, props.title)
    )
  );
};

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

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
