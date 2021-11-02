import React from "react";
import "../stylesheets/Home.css";
import Section from "./Section";

function Home() {
	return (
		<div className="Container">
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpeg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
		</div>
	);
}

export default Home;
