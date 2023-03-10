/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import App from "./app";

test("When we render the app, the text All Products should be display", () => {
    render(
        <Provider store={appStore}>
            <App />
        </Provider>
    );

    const element = screen.getByText(/All Products/i);
    expect(element).toBeInTheDocument();
});
