// src/components/Card.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Card = ({ currMovie }) => {
  const { Title, Poster, Year, imdbID,Plot } = currMovie;

  return (
    <div className="flex flex-col justify-between max-w-xs rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 p-4">
      {/* Image Section */}
      <div className="space-y-2 min-w-100">
        <img
          src={Poster}
          alt={Title}
          className="block object-cover object-center w-full rounded-md h-48 dark:bg-gray-500"
        />
        <div className="flex items-center text-xs text-gray-500">
          <span>Year: {Year}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-2 mt-2 flex-grow">
        <h3 className="text-xl font-semibold dark:text-violet-600 hover:underline truncate">
          {Title}
        </h3>
        <p className="leading-snug text-sm dark:text-gray-600 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolor nobis, quam corrupti voluptas repellat assumenda molestias a? Quam, dolorum. A sint culpa velit id earum, harum aut repellendus temporibus magnam unde. Eos ipsam nobis a nisi magnam vero maiores voluptatem commodi unde, provident asperiores officia et minus sed totam?
        </p>
        {/* <p className="text-sm dark:text-gray-800">Rating: {rating}</p> */}
      </div>

      {/* Read More Button */}
      <div className="mt-4">
        <NavLink
          to={`/movie/${imdbID}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-white hover:bg-violet-700 h-12"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};
