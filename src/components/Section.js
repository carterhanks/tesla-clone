import React from "react";
import "../stylesheets/Section.css";
import downArrow from "../images/new-down-arrow.svg";

function Section({
	title,
	description,
	leftBtnText,
	rightBtnText,
	backgroundImg
}) {
	return (
		<div className="Wrap" style={{ backgroundImage: `url(${backgroundImg})` }}>
			<div className="ItemText">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className="Buttons">
				<div className="ButtonGroup">
					<div className="LeftButton">{leftBtnText}</div>
					{rightBtnText && <div className="RightButton">{rightBtnText}</div>}
				</div>
				<img src={downArrow} className="DownArrow"></img>
			</div>
		</div>
	);
}

export default Section;
