import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./index.css";
import {movies} from "./moviesData";

class App extends Component{
  
  constructor(){
    super();
    this.state={
        movies: movies,
        cartCount: 0
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
    let {movies, cartCount} = this.state;
    const mid= movies.indexOf(movie);

    movies[mid].cart = !movies[mid].cart;
    if(movies[mid].cart){
      cartCount += 1;
    } else{
      cartCount -= 1;
    }

    this.setState({
        movies:movies,
        cartCount
    })
}

  render(){
    const {movies, cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList 
        movie={movies}
        incStars = {this.incStars}
        decStars = {this.decStars}
        handleFav = {this.handleFav}
        handleCart = {this.handleCart}
        />
      </>
    );
  }
}

export default App;
