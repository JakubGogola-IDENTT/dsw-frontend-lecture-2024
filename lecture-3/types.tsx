import React from 'react';

type UserProfileProps = {
  name: string;
  age: number;
  onClick?: () => void; // Optional function prop
};

const UserProfile: React.FC<UserProfileProps> = ({ name, age, onClick }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default UserProfile;
