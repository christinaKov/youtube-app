import { AxiosResponse } from "axios";
import { BaseResponse, Video } from "../types/videoTypes";
import { axiosInstance } from "./axiosInstance";

export const fetchVideos = async (search: string) => {
	const { data }: AxiosResponse<BaseResponse<Video>> = await axiosInstance.get(
		"/search",
		{
			params: {
				q: search,
				type: "video",
				part: "snippet",
				maxResults: 21,
			},
		}
	);
	return data;
};
