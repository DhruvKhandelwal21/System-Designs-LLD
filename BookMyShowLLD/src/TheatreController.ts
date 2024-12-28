import { City } from "./Constant";
import { Movie } from "./Movie";
import { Show } from "./Show";
import { Theatre } from "./Theatre";

export class TheatreController {
  private cityVsTheatres: Map<City, Theatre[]>;
  private allTheatres: Theatre[];
  constructor() {
    this.cityVsTheatres = new Map();
    this.allTheatres = [];
  }
  addMovie(movie: Theatre, city: City) {
    this.allTheatres.push(movie);
    let cityTheatres: Theatre[] = this.cityVsTheatres.get(city) || [];
    cityTheatres.push(movie);
    this.cityVsTheatres.set(city, cityTheatres);
  }
//   getTheatreById(theatreId: number): Theatre | null {
//     return this.allTheatres.find((m) => m.theatreId === theatreId) || null;
//   }
  getAllShow(city: City, movie: Movie): Map<Theatre, Show[]> {
    let currentCityTheatres = this.cityVsTheatres.get(city) || [];
    const theatreVsMovie: Map<Theatre, Show[]> = new Map();
    currentCityTheatres?.forEach((th)=>{
        const shows = th.shows?.filter((s)=> s.movie.movieName===movie.movieName);
        theatreVsMovie.set(th, shows);
    })
    return theatreVsMovie;
  }
}
