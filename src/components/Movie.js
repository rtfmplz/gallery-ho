import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'


/**
 * stateless function component
 * 
 *    - render(), update 등 LifeCycle이 필요없는 component
 *    - just return JSX(html) code
 */
function Movie({title, poster, genres, synopsis}) {
  return (
    // className == class in HTML
    <div className = "Movie">
      <div className = "Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className = "Movie__Column">
        <h1>{title}</h1>
        <div className = "Movie__Genres">
          {genres.map( (genre, index) => {
            return <MovieGenre genre={genre} key={index} />
          })}
        </div>
        <div className = "Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'/>   
        </div>
      </div>
    </div> 
  );
}

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  );
}

function MovieGenre({genre}) {
  return (
    <span className = "Movie__Genre">{genre}</span>
  );
}


/**
 * propTypes를 override 해서 props의 type을 명시 할 수 있다.
 * isRequired: 필수 parameter를 정의할 수 있다.
 */ 
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
