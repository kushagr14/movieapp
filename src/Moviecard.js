import { Component } from "react";


class Moviecard extends Component{


    // addStars = () => {
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // });
    //     if(this.state.stars < 5){
    //         this.setState((prevState) => {
    //             return {stars: prevState.stars + 0.5}
    //         });
    //     }
    // }

    // minusStars = ()=> {
    //     if(this.state.stars !== 0) {
    //         this.setState((prevState) => {
    //             return {
    //                 stars: prevState.stars - 0.5
    //             }
    //         });
    //     }
    // }

    // favHandler = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    cartHandler = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    render(){
        const {title, plot, poster,price, rating, stars, fav, cart} = this.props.movie;

        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                <img alt="Poster" src={poster}></img>
                </div>
                <div className="right"> 
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                <div className="footer">
                    <div className="rating">{rating}</div>
                    <div className="star-dis">
                        <img alt="decrease" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            className="str-btn" 
                            onClick={() => {this.props.minusStars(this.props.movie)}}/>
                        <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars"></img>
                        <img alt="increase" src="https://t4.ftcdn.net/jpg/03/22/32/37/240_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg" 
                             className="str-btn" 
                             onClick={() => {this.props.addStars(this.props.movie)}} />
                        <span>{stars}</span>
                    </div>
                    {   //conditional rendering using ternary operators
                        fav ? 
                            <button className="unfavourite-btn" onClick={() => {this.props.favHandler(this.props.movie)}}>Un-Favourite</button> : 
                            <button className="favourite-btn" onClick={() => {this.props.favHandler(this.props.movie)}}>Favourites</button>
                    }
                    <button className={cart? "unfavourite-btn" : "cart-btn"} 
                        onClick={() => {this.props.cartHandler(this.props.movie)}}>
                        {cart ? "Remove From Cart" : "Add to cart"}</button>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Moviecard;