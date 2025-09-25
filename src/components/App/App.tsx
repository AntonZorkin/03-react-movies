import { useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/movieService";
import type { Movie } from "../../types/movie";
import { toast } from "react-hot-toast";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (query: string) => {
    try{
    const result = await fetchMovies(query);
    if (result.length === 0) {
      toast.error("No movies found for your request.");
      return
    }
    setMovies(result);
  }catch {
    setIsError(true)
  }
  };
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster position="top-center" />
      {isError === false && <MovieGrid movies={movies} />}
    </div>
  );
};
export default App;
