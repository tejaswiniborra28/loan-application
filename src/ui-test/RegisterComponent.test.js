import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import RegisterComponent from "../components/RegisterComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

afterEach(cleanup)
test (" test for validation of Name input", ()=>{
    render(<Provider store={store}>
       <BrowserRouter>
        <RegisterComponent />
        </BrowserRouter>
        </Provider>)
    const heading= screen.getByText("Sign In")
    expect(heading).toBeInTheDocument();    
    const inputEl = screen.getByTestId("first name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
    const inputE2 = screen.getByTestId("last name");
    expect(inputE2).toBeInTheDocument();
    expect(inputE2).toHaveAttribute("name", "LastName");
    const inputE3 = screen.getByTestId("mobileno");
    expect(inputE3).toBeInTheDocument();
    expect(inputE3).toHaveAttribute("name", "mobile");
    const inputE4 = screen.getByTestId("mobileno");
    userEvent.type(inputE4, "+912222222222");

    const inputE5 = screen.getByTestId("reg-email");
    expect(inputE5).toBeInTheDocument();
    expect(inputE5).toHaveAttribute("name", "email");
    const inputE6 = screen.getByTestId("reg-email");
    userEvent.type(inputE6, "test1@mail.com");
 
    expect(screen.getByTestId("reg-email")).toHaveValue("test1@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()
 
 })
test (" test for validation of password input and Pan", ()=>{
    render(<Provider store={store}>
       <BrowserRouter>
        <RegisterComponent />
        </BrowserRouter>
        </Provider>)
    const inputE7 = screen.getByTestId("reg-pwd");
    expect(inputE7).toBeInTheDocument();
    expect(inputE7).toHaveAttribute("type", "password");
    const inputE8 = screen.getByTestId("reg-pwd");
    userEvent.type(inputE8, "One@2022");
 
    expect(screen.getByTestId("reg-pwd")).toHaveValue("One@2022");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()

    const inputE9 = screen.getByTestId("reg-pwd2");
    expect(inputE9).toBeInTheDocument();
    expect(inputE9).toHaveAttribute("name", "confirmpwd");
    const inputE10 = screen.getByTestId("reg-pwd2");
    userEvent.type(inputE10, "One@2022");
 
    expect(screen.getByTestId("reg-pwd2")).toHaveValue("One@2022");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()


    const inputE11 = screen.getByTestId("reg-pan");
    expect(inputE11).toBeInTheDocument();
    expect(inputE11).toHaveAttribute("name", "pan");
    const inputE12 = screen.getByTestId("reg-pan");
    userEvent.type(inputE12, "AAAAA1111A");
 
    expect(screen.getByTestId("reg-pan")).toHaveValue("AAAAA1111A");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()

     })

    test (" test for validation of Country, State,City input", ()=>{
        render(<Provider store={store}>
           <BrowserRouter>
            <RegisterComponent />
            </BrowserRouter>
            </Provider>)

const inputEl = screen.getByTestId("country");
expect(inputEl).toBeInTheDocument();
expect(inputEl).toHaveAttribute("name", "country");  

const inputE2 = screen.getByTestId("state");
expect(inputE2).toBeInTheDocument();
expect(inputE2).toHaveAttribute("name", "state");

const inputE3 = screen.getByTestId("city");
expect(inputE3).toBeInTheDocument();
expect(inputE3).toHaveAttribute("name", "city");
  const btnRegister = screen.getByTestId("btn");
    fireEvent.click(btnRegister);
    expect(screen.getByTestId("btn")).toHaveTextContent("Register");

    const LogIn= screen.getByText("Login here")
    expect(LogIn).toBeInTheDocument();
    
})

