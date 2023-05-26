import React from "react";
import ReactDOM from "react-dom/client";

// Import main style file
import "./styles/index.scss";
// Import main component
import App from "./App";


// Create a root where to render
const root = ReactDOM.createRoot(document.getElementById("root"));
// Call to render
root.render(
<React.StrictMode>
    {/* Main component to render */}
    <App />
</React.StrictMode>
);




