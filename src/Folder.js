import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Folder(props) {
  return (
    <li className='folder-container'>
      <Link to={`/folder/${props.id}`}>
        <div>
          <h3>{props.name}</h3>
        </div>
      </Link>
    </li>
  )
}

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Folder;

