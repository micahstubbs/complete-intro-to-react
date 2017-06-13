// @flow

import React from 'react';
import Header from './Header';

const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`public/img/posters/${poster}`} alt={`Poster for ${title}`} />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`https://www.youtube-nocoookie.com/embed/${trailer}?rel=0&controls=0&showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
};
export default Details;
