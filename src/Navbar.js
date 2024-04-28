import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <>
                <div style={styles.nav}>
                    <div style={styles.title}>Movie App</div>
                    <div style={styles.cartContainer}>
                        <img alt="cart icon" style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                        <span style={styles.cartCount}>0</span>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    nav: {
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },
    title:{
        marginLeft: 20,
        padding: 10,
        fontSize: 30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "uppercase"
    },
    cartContainer: {
        position: "relative",
        cursor: "pointer"
    },
    cartIcon:{
        height: 48,
        marginRight: 20
    },
    cartCount:{
        background: "orange",
        borderRadius: "50%",
        padding: "4px 8px",
        position: "absolute",
        right:10, 
        top: -5,
        fontSize: 12
    }
}

export default Navbar;