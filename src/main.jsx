import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";

// virtual dom  main dom

createRoot(document.getElementById("root")).render(<App />);
