import { Booking } from "./src/Booking";
import { City } from "./src/Constant";
import { Movie } from "./src/Movie";
import { MovieController } from "./src/MovieController";
import { Seat } from "./src/Seat";
import { Show } from "./src/Show";
import { TheatreController } from "./src/TheatreController";
class BookMyShow {
    private movieController: MovieController;
    private theatreController: TheatreController;

    constructor() {
        this.movieController = new MovieController();
        this.theatreController = new TheatreController();
    }

    public createBooking(userCity: City, movieName: string){
        let movies: Movie[] = this.movieController.getMovieByCity(userCity);
        const interestedMovie = movies.find((m:Movie)=> m.movieName===movieName);
        if(interestedMovie){
            const showsTheaterWise = this.theatreController.getAllShow(userCity, interestedMovie);
            const entry = Array.from(showsTheaterWise.entries())[0];
            const runningShows: Show[] = entry[1];
            const interestedShow: Show = runningShows[0];
            let seatNumber = 30;
            let bookedSeats: number[] = interestedShow.seatIds;
            if(!bookedSeats.find((x)=>x==30)){
                bookedSeats.push(seatNumber);
                let booking: Booking = new Booking();
                let myBookedSeats: Seat[] = [];
                const allSeats = interestedShow.screen.seats;
                allSeats.map((s)=>{
                    if(s.seatId===seatNumber){
                        myBookedSeats.push(s);
                    }
                })
                booking.bookedSeats = myBookedSeats;
                booking.show = interestedShow;
            }
        }     
    }
}

const Main = ()=>{
    
}

Main();