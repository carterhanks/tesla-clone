import React from "react";
import "../stylesheets/Header.css";
import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
	return (
		<div className="header-container">
			<a>
				<img src={logo} alt="Error Loading Logo" />
			</a>
			<div className="header-menu">
				<a href="#">Model S</a>

				<a href="#">Model 3</a>

				<a href="#">Model X</a>

				<a href="#">Model Y</a>
			</div>
			<div className="header-rightMenu">
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<div className="header-rightMenu-customMenu"></div>
			</div>
		</div>
	);
}

export default Header;
