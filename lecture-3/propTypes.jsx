import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, onClick }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// Defining prop types
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

// Default props
UserProfile.defaultProps = {
  age: 18, // default age if none provided
};

export default UserProfile;
