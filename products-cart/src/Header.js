function Header() {
    var abc={marginLeft:"1250px"}

    return(
        <div>
            <img src="./images/shopping-img.jpeg" height="220px"width="1500"/>
            <button style={abc} className="btn btn-dark">🛒Cart</button>
        </div>

    );
    
}

export default Header;
