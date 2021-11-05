import React from "react";
import "../stylesheets/Header.css";
import logo from "../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
				<MenuIcon className="header-rightMenu-customMenu"></MenuIcon>
			</div>
			<div className="header-burgerNav">
				<div className="header-burgerNav-closeWrapper">
					<CloseIcon className="header-burgerNav-closeWrapper-closeIcon" />
				</div>
				<li>
					<a href="#">Model S</a>
				</li>
				<li>
					<a href="#">Model 3</a>
				</li>
				<li>
					<a href="#">Model X</a>
				</li>
				<li>
					<a href="#">Model Y</a>
				</li>
				<li>
					<a href="#">Solar Roof</a>
				</li>
				<li>
					<a href="#">Solar Panels</a>
				</li>
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Used Inventory</a>
				</li>
				<li>
					<a href="#">Test Drive</a>
				</li>
				<li>
					<a href="#">Powerwall</a>
				</li>
				<li>
					<a href="#">Commercial Energy</a>
				</li>
				<li>
					<a href="#">Utilities</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
				<li>
					<a href="#">Find Us</a>
				</li>
				<li>
					<a href="#">Support</a>
				</li>
				<li>
					<a href="#">Investor Relations</a>
				</li>
				<li>
					<a href="#">Shop</a>
				</li>
				<li>
					<a href="#">Account</a>
				</li>
				<li>
					<a href="#">More</a>
				</li>
			</div>
		</div>
	);
}

export default Header;
