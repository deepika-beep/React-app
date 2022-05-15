import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect , useState} from "react";
import MovieCard from "./MovieCard";
const API_URL = "http://omdbapi.com?apikey=8ec45f5c";
// copy object from console
const movie1 = {
  Title: "Spiderman",
  Year: 2012,
  imbdID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {

  const [movies,setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input placeholder="search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length>0 ?
         (
<div className="container">
        {movies.map((movie)=>(
<MovieCard movie = {movie}/>
         ))}
      </div>):(
      <div className="empty">
      <h2>no movies</h2>
      </div>
        )
      }
      
    </div>
  );
};
export default App; 
