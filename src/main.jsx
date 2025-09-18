import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BetProvider } from "./contexts/BetContext";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BetProvider>
			<App />
		</BetProvider>
	</StrictMode>
);
