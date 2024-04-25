import { Component } from "react";
import Moviecard from "./Moviecard";

class MovieList extends Component{

    constructor(){
        super();
        this.state={
            movies:
            [
                {
                    title: "The Avengers",
                    plot: "Supernatural nnvommcmmcmxnwjkdb flsnflsdknc slfnfselncs lseihfklsn",
                    poster: "https://picsum.photos/id/237/400/300",
                    price: 199,
                    rating: 8.9,
                    stars:0,
                    fav: false,
                    cart: false
                },
                {
                    title: "DDLJ",
                    plot: "Bollywood Love story blah blah balh blah",
                    poster: "https://picsum.photos/id/237/400/300",
                    price: 399,
                    rating: 9.9,
                    stars:0,
                    fav: false,
                    cart: false
                },
                {
                    title: "ZNMD",
                    plot: "Europe trip, blah blah balh, too much money, blah blah blah, live your life",
                    poster: "https://picsum.photos/id/237/400/300",
                    price: 299,
                    rating: 7.4,
                    stars:0,
                    fav: false,
                    cart: false
                }
            ]
        }
    }

    incStars = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        if(movies[mid].stars >= 5) return;
        movies[mid].stars += 0.5;
        this.setState({
            movies:movies
        })
    }

    decStars = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        if(movies[mid].stars !== 0) {
            movies[mid].stars -= 0.5;
            this.setState({
                movies:movies
            })
        }
    }

    handleFav = (movie) =>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);

        movies[mid].fav = !movies[mid].fav;
        this.setState({
            movies:movies
        })
    }

    handleCart = (movie) =>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);

        movies[mid].cart = !movies[mid].cart;
        this.setState({
            movies:movies
        })
    }
    

    render() {

        

        // const {title, plot, price, rating, stars, fav, cart, poster} = this.state.movie;

        return (
            <>
                {this.state.movies.map((m) => <Moviecard movie= {m} 
                addStars={this.incStars} 
                minusStars={this.decStars}
                favHandler={this.handleFav}
                cartHandler={this.handleCart}
                />)}
            </>
        )
    }
}

export default MovieList;