import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from 'firebase';

function Header() {
    const login=()=>{
        if(user){
            auth.signOut();
        }
    };
    const [{basket}, user]=useStateValue();
    return (
        <nav className="header">
            <Link to="/">
            <img className="header_logo" src="https://firebasestorage.googleapis.com/v0/b/ecommercereact-f4a24.appspot.com/o/logo.webp?alt=media&token=bdbcee51-3fc3-4966-841f-37393be30dc0" alt="logo of the app"/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header_option_lineOne">Hello {user?.email}</span>
                        <span className="header_option_lineTwo">{user? 'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>
                {/* <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_option_lineOne">Returns</span>
                        <span className="header_option_lineTwo"> & Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_option_lineOne">Your</span>
                        <span className="header_option_lineTwo">Order</span>
                    </div>
                </Link> */}
                <Link to="/checkout" className="header__link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header
