// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const AuthorCard = ({ author }) => {
  return (
    <div className="bg-white bg-opacity-70 w-80 h-10 mt-8">
      <p className="text-gray-600 text-center rounded-lg max-w-md mt-2">Author: {author}</p>
    </div>
  );
};

export default AuthorCard