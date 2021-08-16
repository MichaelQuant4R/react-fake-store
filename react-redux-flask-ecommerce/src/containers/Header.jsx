import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    
    return (
    
        <div className="ui fixed menu margin-50px">
        
            
            <div className="ui container center">
                <Link to="/">
                <h2>Fake Shop</h2>
                </Link>
            </div>
        
            
            <div className="ui container right basket">
            </div>
        </div>
    
    
    );
};

export default Header;