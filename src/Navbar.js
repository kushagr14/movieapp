import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgb(70, 68, 224);
    display: flex;
    justify-content: space-between;
    
`;

const Title= styled.div`
    font-size: 30;
    color: #fff;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    margin-left: 20;
`;

const CartContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartIcon = styled.img`
    width: 50%; 
    height: auto;
    marginRight: 20;
    
`;

const CartCount = styled.span`
        background: orange;
        border-radius: 50%;
        padding: 4px 8px;
        position: absolute;
        right:10;
        top: -5;
        fontSize: 12;        
`;

class Navbar extends Component{
    render(){
        return(
            <>
                <Nav>
                    <Title>Movie App</Title>
                    <CartContainer>
                        <CartIcon alt="cart-img" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                        <CartCount>0</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}



export default Navbar;