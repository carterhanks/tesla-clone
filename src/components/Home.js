import React from "react";
import "../stylesheets/Home.css";
import Section from "./Section";
import modelS from "../images/model-s.jpeg";
import modelY from "../images/model-y.jpeg";
import model3 from "../images/model-3.jpeg";
import modelX from "../images/model-x.jpeg";
import solarPanels from "../images/solar-panels.jpeg";
import solarRoof from "../images/solar-roof.jpeg";
import accessories from "../images/accessories.jpeg";

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
			<Section
				title="Solar Panels"
				description="Lowest Cost Solar Panels in America"
				backgroundImg={solarPanels}
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Solar Roof"
				description="Produce Clean Energy From Your Roof"
				backgroundImg={solarRoof}
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg={accessories}
				leftBtnText="Shop Now"
			/>
		</div>
	);
}

export default Home;
