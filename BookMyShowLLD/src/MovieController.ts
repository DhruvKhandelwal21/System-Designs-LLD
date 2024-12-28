import { City } from "./Constant";
import { Movie } from "./Movie";

export class MovieController {
  public cityVsMovies: Map<City, Movie[]>;
  public allMovies: Movie[];
  constructor() {
    this.cityVsMovies = new Map();
    this.allMovies = [];
  }
  addMovie(movie: Movie, city: City) {
    this.allMovies.push(movie);
    let cityMovies: Movie[] = this.cityVsMovies.get(city) || [];
    cityMovies.push(movie);
    this.cityVsMovies.set(city, cityMovies);
  }
  getMovieByName(movieName: string): Movie | null {
    return this.allMovies.find((m) => m.movieName === movieName) || null;
  }
  getMovieByCity(city: City): Movie[] {
    return this.cityVsMovies.get(city) || [];
  }
}
