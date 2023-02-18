/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import App from "./app";

test("When we render the app, the text HOLA should be display", () => {
    const { getByText } = render(<App />);

    expect(getByText(/hola/i)).toBeInTheDocument();
});
