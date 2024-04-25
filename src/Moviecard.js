import { Component } from "react";


class Moviecard extends Component{

    constructor(){
        super();
        this.state={
            title: "The Avengers",
            plot: "Supernatural nnvommcmmcmxnwjkdb flsnflsdknc slfnfselncs lseihfklsn",
            price: 199,
            rating: 8.9,
            stars:0,
            fav: false,
            cart: false
        }
    }
    countStars=0;

    addStars = () => {
        // this.setState({
        //     stars: this.state.stars + 0.5
        // });
        if(this.state.stars < 5){
            this.setState((prevState) => {
                return {stars: prevState.stars + 0.5}
            });
        }
    }

    minusStars = ()=> {
        if(this.state.stars != 0) {
            this.setState((prevState) => {
                return {
                    stars: prevState.stars - 0.5
                }
            });
        }
    }

    favHandler = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    cartHandler = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    render(){
        const {title, plot, price, rating, stars} = this.state;

        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                <img alt="Poster" src="https://picsum.photos/id/237/400/300"></img>
                </div>
                <div className="right"> 
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" className="str-btn" onClick={this.minusStars}/>
                        <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars"></img>
                        <img src="https://t4.ftcdn.net/jpg/03/22/32/37/240_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg" className="str-btn" onClick={this.addStars}/>
                        <span>{stars}</span>
                    </div>
                    {   //conditional rendering using ternary operators
                        this.state.fav ? 
                            <button className="unfavourite-btn" onClick={this.favHandler}>Un-Favourite</button> : 
                            <button className="favourite-btn" onClick={this.favHandler}>Favourites</button>
                    }
                    <button className={this.state.cart? "unfavourite-btn" : "cart-btn"} onClick={this.cartHandler}>
                        {this.state.cart ? "Remove From Cart" : "Add to cart"}</button>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Moviecard;