import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://vegnews.com/media/W1siZiIsIjEzMDc1L1ZlZ05ld3MuQW1hem9ubG9nby5wbmciXSxbInAiLCJ0aHVtYiIsIjgwMHg0NzMjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews.Amazonlogo.png?sha=56cb915cd26dc5eb"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello,</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns,</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your,</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
