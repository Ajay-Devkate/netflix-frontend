export const API_END_POINT = "http://localhost:8000/api/v1/user/";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM5MWMzZDM4MmEyYmQyNTk4MjQ0ZTYxNWQ2MzMwMiIsIm5iZiI6MTc0MjM3MjcwNC4xMjksInN1YiI6IjY3ZGE3ZjYwYzUzNmFmNjViYmE2YzQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TOmkPJw4cQfiUafHLvNQnTWX72rUtKvil-RO9moc1QI'
    }
  };

  export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
  export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

  export const Banner_Url = "https://image.tmdb.org/t/p/w500";
  export const SEARCH_Movie_URL = "https://api.themoviedb.org/3/search/movie?query="