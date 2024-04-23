import { Component } from "react";


class Moviecard extends Component{

    render(){
        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
                <img alt="Poster" src="https://picsum.photos/id/237/400/300"></img>
                </div>
                <div className="right"> 
                <div className="title">The Avengers</div>
                <div className="plot">Supernatural nnvommcmmcmxnwjkdb flsnflsdknc slfnfselncs lseihfklsn </div>
                <div className="price">Rs. 199</div>

                <div className="footer">
                    <div className="rating">8.9</div>
                    <div className="star-dis">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" className="str-btn"/>
                        <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars"></img>
                        <img src="https://t4.ftcdn.net/jpg/03/22/32/37/240_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg" className="str-btn"/>
                        <span>0</span>
                    </div>
                    <button className="favourite-btn">Favourites</button>
                    <button className="cart-btn">Add to cart</button>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Moviecard;