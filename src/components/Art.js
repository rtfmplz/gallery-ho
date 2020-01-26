import React from 'react';
import './Art.css';
import PropTypes from 'prop-types';


/**
 * stateless function component
 * 
 *    - render(), update 등 LifeCycle이 필요없는 component
 *    - just return JSX(html) code
 */
function Art({photo}) {
  return (
    // className == class in HTML
    <div className = "Art">
      <div className = "Art__Column">
        <ArtPhoto photo={photo}/>
      </div>
      <div className = "Art__Column">
      </div>
    </div>
  );
}

function ArtPhoto({photo}) {
  return (
    <img src={photo} className="Art__Photo" />
  );
}


/**
 * propTypes를 override 해서 props의 type을 명시 할 수 있다.
 * isRequired: 필수 parameter를 정의할 수 있다.
 */ 
Art.propTypes = {
  photo: PropTypes.string.isRequired
}

ArtPhoto.propTypes = {
  photo: PropTypes.string.isRequired
}


export default Art;
