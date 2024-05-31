import "../videoList/VideoList.css";

// Types
import { Video } from "../../types/videoTypes";

// Context
import { useContext } from "react";
import { LayoutContext } from "../../pages/MainPage";

export const VideoItem = ({ video }: { video: Video }) => {
	const layoutTheme = useContext(LayoutContext);

	return (
		<li className="video_item">
			<img
				className={`video_img ${layoutTheme.layout === "grid" ? "" : "hidden"}`}
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<img
				className={`video_img ${layoutTheme.layout === "list" ? "" : "hidden"}`}
				src={video.snippet.thumbnails.default.url}
				alt={video.snippet.title}
			/>
			<div className="video_info">
				<h2>{video.snippet.title}</h2>
				<p>{video.snippet.description}</p>
			</div>
		</li>
	);
};
