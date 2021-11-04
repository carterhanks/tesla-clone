import React from "react";
import "../stylesheets/Header.css";
import logo from "../images/logo.svg";

function Header() {
	return (
		<div className="header-container">
			<a>
				<img src={logo} alt="Error Loading Logo" />
			</a>
			<div className="header-menu">
				<p>
					<a href="#">Model S</a>
				</p>
				<p>
					<a href="#">Model 3</a>
				</p>
				<p>
					<a href="#">Model X</a>
				</p>
				<p>
					<a href="#">Model Y</a>
				</p>
			</div>
		</div>
	);
}

export default Header;
