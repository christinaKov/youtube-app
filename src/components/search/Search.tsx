import "./Search.css";

// React
import { ChangeEvent, useEffect, useState } from "react";

// APIs
import { fetchVideos } from "../../api/fetchVideos";

// React query
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const Search = () => {
	const [inputValue, setInputValue] = useState("");
	const debounceValue = useDebounce(inputValue, 500);

	useEffect(() => {
		if (debounceValue !== "") refetch();
	}, [debounceValue]);

	const { refetch } = useQuery({
		queryKey: ["videos"],
		queryFn: () => fetchVideos(debounceValue as string),
		enabled: debounceValue !== "",
	});

	const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="search">
			<input placeholder="Type here..." onChange={handleChange} type="text" />
		</div>
	);
};
