import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const MovieDetails = () => {

  const movieData = useLoaderData();
  console.log(movieData);
    if (!movieData || movieData.Response === "False") {
      return <p>Movie not found</p>;
    }
    const { Title, Plot, Poster, Year, Director, Actors, Genre, Ratings, imdbID } = movieData;
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <img
            src={Poster}
            alt={Title}
            className="w-full md:w-1/3 object-cover rounded-md"
          />
          <div className="md:ml-4">
            <h1 className="text-3xl font-bold">{Title}</h1>
            <p className="text-lg text-gray-200 mb-4">Year: {Year}</p>
            <p className="text-lg text-gray-200 mb-4">Genre: {Genre}</p>
            <p className="text-lg text-gray-200 mb-4">Director: {Director}</p>
            <p className="text-lg text-gray-200 mb-4">Actors: {Actors}</p>
            <p className="text-lg text-gray-200 mb-4">Rating: {Ratings[0]?.Value}</p>
            <p className="text-lg text-gray-200 mb-4">Plot: {Plot}</p>
            <a
              href={`https://www.imdb.com/title/${imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              See on IMDb
            </a>
          </div>
        </div>
      </div>
    );
}
