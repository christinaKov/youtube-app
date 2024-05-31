import { useState, useRef, useEffect } from "react";

export const useDebounce = (inputValue: unknown, delay: number) => {
	const [debounceValue, setDebounceValue] = useState(() => inputValue);

	const timerRef = useRef<number | undefined>(undefined);

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			setDebounceValue(inputValue);
		}, delay);

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [inputValue]);

	return debounceValue;
};
