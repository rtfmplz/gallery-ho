import React from 'react';
import './Artist.css';
import PropTypes from 'prop-types';


/**
 * stateless function component
 * 
 *    - render(), update 등 LifeCycle이 필요없는 component
 *    - just return JSX(html) code
 */
function Artist({name, email, phone, description, photo}) {
  return (
    // className == class in HTML
    <div className = "Artist">
      <div className = "Artist__Column">
        <ArtistPhoto photo={photo} alt={name.kor} />
      </div>
      <div className = "Artist__Column">
        <h1>{name.kor} ({name.eng})</h1>
        <div className = "Artist__Infos">
          <div className = "Artist__Info">email: {email}</div>
          <div className = "Artist__Info">phone: {phone}</div>
        </div>
        <div className = "Artist__Desc">
          {description}
        </div>
      </div>
    </div>
  );
}

function ArtistPhoto({photo, alt}) {
  return (
    <img src={photo} alt={alt} title={alt} className="Artist__Photo" />
  );
}


/**
 * propTypes를 override 해서 props의 type을 명시 할 수 있다.
 * isRequired: 필수 parameter를 정의할 수 있다.
 */ 
Artist.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  synopsis: PropTypes.string.isRequired
}

ArtistPhoto.propTypes = {
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}


export default Artist;
