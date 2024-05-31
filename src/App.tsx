import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MainPage } from "./pages/MainPage";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MainPage />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
