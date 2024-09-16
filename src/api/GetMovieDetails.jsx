
export const getMoviesDetails = async ({params}) => {
    console.log(params);
    const id = params.movieID;
    const url = `http://www.omdbapi.com/?i=${id}&apikey=f1a8bf44`; // Example search for 'Inception'
    try {
        const response = await fetch(url);
        const result = await response.json(); // Await the JSON conversion
        return result;
    } catch (error) {
        console.error('Error fetching movies data:', error);
    }
};
