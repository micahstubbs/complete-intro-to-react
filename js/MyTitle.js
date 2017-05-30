import React from 'react';

const ce = React.createElement;

// prettier-ignore
function MyTitle(props) {
  return (
    ce('div', null,
      ce('h1', {style: {color: props.color}}, props.title)
    )
  );
}

export default MyTitle;
