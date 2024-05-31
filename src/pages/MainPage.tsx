// React
import { useState, createContext } from "react";

// Components
import { Search } from "../components/search/Search";
import { VideoList } from "../components/videoList/VideoList";
import { ViewToggler } from "../components/viewToggler/ViewToggler";

// Context
export const LayoutContext = createContext({
	layout: "grid",
	toggleLayout: (layout: string) => {},
});

export const MainPage = () => {
	const [layout, setLayout] = useState("grid");

	const toggleLayout = (layout: string) => {
		setLayout(layout);
	};

	return (
		<LayoutContext.Provider value={{ layout, toggleLayout }}>
			<div className="main-page">
				<h1 className="main_title">Search by Youtube</h1>
				<div className="header_container">
					<Search />
					<ViewToggler />
				</div>
				<VideoList />
			</div>
		</LayoutContext.Provider>
	);
};
