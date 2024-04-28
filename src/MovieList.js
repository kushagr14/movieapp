import { Component } from "react";
import Moviecard from "./Moviecard";


class MovieList extends Component{

    render() {
        const {movie, incStars, decStars, handleFav, handleCart} = this.props;
        console.log(this.props);

        return (
            <>
                {movie.map((m) => <Moviecard movie= {m} 
                addStars={incStars} 
                minusStars={decStars}
                favHandler={handleFav}
                cartHandler={handleCart}
                key= {m.id}
                />)}
            </>
        )
    }
}

export default MovieList;