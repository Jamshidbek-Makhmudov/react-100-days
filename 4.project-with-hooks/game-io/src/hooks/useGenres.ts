// import { Genre } from "../interfaces";
// import useData from "./useData";
import genres from "../data/genres";

//const useGenres = () => useData<Genre>("/genres")
const useGenres = () => ({ data: genres, isLoading: false, error: null }) //this is static data from local
export default useGenres