import { Component } from "react";
import styled from "styled-components";
import Nav from "./Navbar.module.css";



class Navbar extends Component{
    render(){
        return(
            <>
                <div className={Nav.Nav}>
                    <div className={Nav.Title}>Movie-App</div>
                    <div className={Nav.CartContainer}>
                        <img className={Nav.CartIcon} alt="cart-img" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                        <span className={Nav.CartCount}>{this.props.cartCount}</span>
                    </div>
                </div>
            </>
        )
    }
}



export default Navbar;