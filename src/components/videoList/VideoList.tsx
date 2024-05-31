import "./VideoList.css";

// Components
import { VideoItem } from "../videoItem/VideoItem";

// React query
import { useQuery } from "@tanstack/react-query";

// Types
import { BaseResponse, Video } from "../../types/videoTypes";

// Context
import { useContext } from "react";
import { LayoutContext } from "../../pages/MainPage";

export const VideoList = () => {
	const layoutTheme = useContext(LayoutContext);

	const { data: videos } = useQuery<BaseResponse<Video>>({
		queryKey: ["videos"],
		enabled: false,
	});

	return (
		<ul
			className={`video_list ${
				layoutTheme.layout === "list" ? "video_list--list" : ""
			}`}
		>
			{videos &&
				videos.items?.map((video) => (
					<VideoItem key={video.id.videoId} video={video} />
				))}
		</ul>
	);
};
