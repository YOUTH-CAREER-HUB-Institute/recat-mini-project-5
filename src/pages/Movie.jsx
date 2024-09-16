import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Card } from '../components/layouts/ui/Card';

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {moviesData.Search.map((currMovie) => {
        return <Card key={currMovie.imdbID
        } currMovie={currMovie} />;
      })}
    </div>

  )
}

export default Movie; 