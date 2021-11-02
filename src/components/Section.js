import React from "react";
import "../stylesheets/Section.css";
import DownArrow from "../images/down-arrow.svg";

function Section() {
	return (
		<div className="Wrap">
			<div className="ItemText">
				<h1>Model S</h1>
				<p>Order Online for Touchless Delivery</p>
			</div>
			<div className="Buttons">
				<div className="ButtonGroup">
					<div className="LeftButton">Custom Order</div>
					<div className="RightButton">Existing Inventory</div>
				</div>
				<img src={DownArrow} className="DownArrow"></img>
			</div>
		</div>
	);
}

export default Section;
