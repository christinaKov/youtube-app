import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MainPage } from "./pages/MainPage";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/video/:videoId" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
