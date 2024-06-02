import "../videoList/VideoList.css";

// Types
import { Video } from "../../types/videoTypes";

// Context
import { useContext } from "react";
import { LayoutContext } from "../../pages/MainPage";

// Components
import { VideoCard } from "../videoCard/VideoCard";

// Router
import { Link, useParams } from "react-router-dom";

export const VideoItem = ({ video }: { video: Video }) => {
	const layoutTheme = useContext(LayoutContext);

	const { videoId } = useParams();

	return (
		<li className="video_item">
			<Link to={`/video/${video.id.videoId}`}>
				<img
					className={`video_img ${
						layoutTheme.layout === "grid" ? "" : "hidden"
					}`}
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
				/>
				<img
					className={`video_img ${
						layoutTheme.layout === "list" ? "" : "hidden"
					}`}
					src={video.snippet.thumbnails.default.url}
					alt={video.snippet.title}
				/>
				<div className="video_info">
					<h2>{video.snippet.title}</h2>
					<p>{video.snippet.description}</p>
				</div>
			</Link>

			{videoId === video.id.videoId && <VideoCard video={video} />}
		</li>
	);
};
