import axios from "axios";

const api_key = import.meta.env.VITE_YOUTUBE_API_KEY;

export const axiosInstance = axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		key: api_key,
	},
});
