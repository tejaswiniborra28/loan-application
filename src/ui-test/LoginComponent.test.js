import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import LoginComponent from "../components/LoginComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

afterEach(cleanup)
test (" test for validation of email input", ()=>{
    render(<Provider store={store}>
       <BrowserRouter>
        <LoginComponent />
        </BrowserRouter>
        </Provider>)
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("name", "email");
    const inputE2 = screen.getByTestId("email-input");
    userEvent.type(inputE2, "test@mail.com");
 
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()
})
test (" test for validation of password input", ()=>{
    render(<Provider store={store}>
       <BrowserRouter>
        <LoginComponent />
        </BrowserRouter>
        </Provider>)
    const inputE3 = screen.getByTestId("password-test");
    expect(inputE3).toBeInTheDocument();
    expect(inputE3).toHaveAttribute("type", "password");
    const inputE4 = screen.getByTestId("password-test");
    userEvent.type(inputE4, "Any@2022");
 
    expect(screen.getByTestId("password-test")).toHaveValue("Any@2022");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()
    })

    test (" test for validation of password input", ()=>{
        render(<Provider store={store}>
           <BrowserRouter>
            <LoginComponent />
            </BrowserRouter>
            </Provider>)
    const btnIncrement = screen.getByTestId("btn");
    fireEvent.click(btnIncrement);
 
    expect(screen.getByTestId("btn")).toHaveTextContent("Login In");

    const register= screen.getByText("Register here")
    expect(register).toBeInTheDocument();
})

