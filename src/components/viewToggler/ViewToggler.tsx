import "./ViewToggler.css";

// Context
import { useContext } from "react";
import { LayoutContext } from "../../pages/MainPage";

export const ViewToggler = () => {
	const layoutTheme = useContext(LayoutContext);

	const handleToggle = (layout: string) => {
		layoutTheme.toggleLayout(layout);
	};

	return (
		<div className="toggler">
			<i
				onClick={() => handleToggle("grid")}
				className={`fa-solid fa-grip ${
					layoutTheme.layout === "grid" ? "active" : ""
				}`}
			></i>
			<i
				onClick={() => handleToggle("list")}
				className={`fa-solid fa-list ${
					layoutTheme.layout === "list" ? "active" : ""
				}`}
			></i>
		</div>
	);
};
