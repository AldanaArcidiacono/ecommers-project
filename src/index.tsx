import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.module.scss";
import { appStore } from "./infrastructure/store/store";
import App from "./components/app/app";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
