import "./VideoCard.css";

// Types
import { Video } from "../../types/videoTypes";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }: { video: Video }) => {
	console.log(video);

	const publishTime = new Date(video.snippet.publishTime);

	return (
		<div className="video_popup-container">
			<div className="video_popup">
				<Link to={"/"} className="video-card_close-btn">
					<i className="fa-solid fa-xmark"></i>
				</Link>
				<div className="video-card">
					<h1>{video.snippet.channelTitle}</h1>
					<a
						href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
						target="blank"
					>
						<img
							src={video.snippet.thumbnails.high.url}
							alt={video.snippet.title}
						/>
					</a>
					<div className="video-card_info">
						<h2>{video.snippet.title}</h2>
						<p>{video.snippet.description}</p>
						<p>Published: {publishTime.toLocaleString()}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
