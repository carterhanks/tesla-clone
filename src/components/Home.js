import React from "react";
import "../stylesheets/Home.css";
import Section from "./Section";
import modelS from "../images/model-s.jpeg";
import modelY from "../images/model-y.jpeg";
import model3 from "../images/model-3.jpeg";
import modelX from "../images/model-x.jpeg";

function Home() {
	return (
		<div className="Container">
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelS}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelY}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg={model3}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg={modelX}
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
		</div>
	);
}

export default Home;
