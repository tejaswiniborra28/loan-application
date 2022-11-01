import React from "react";
import { render, screen, waitFor,fireEvent,act, cleanup } from '@testing-library/react';
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
    const heading= screen.getByText("Sign Up")
    expect(heading).toBeInTheDocument();    
    const inputEl = screen.getByTestId("first name");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
    // const inputError = screen.getByTestId("error1");
    // expect(inputError).toBeInTheDocument();
    // expect(inputError).toHaveTextContent("required" && "*Mobile Number is required");
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
        const onSubmit = jest.fn();
        render(<Provider store={store}>
           <BrowserRouter>
            <RegisterComponent onSubmit={onSubmit} />
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
const btnRegister = screen.getByTestId("btn-register");
fireEvent.click(btnRegister);
 const abc= screen.getByTestId("submit")
// const { getByText } = render(<Form onSubmit={onSubmit} />);
 fireEvent.click(abc);
// expect(abc).toHaveBeenCalled(0);
expect(screen.getByTestId("btn")).toHaveTextContent("Register");

    const LogIn= screen.getByText("Login here")
    expect(LogIn).toBeInTheDocument();
    
})


test (" test for validation of input values",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId}=render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun}/></BrowserRouter></Provider>);
 await act(async ()=>{
fireEvent.change(getByTestId("first name"),{target:{value:"fgfg"}});
fireEvent.change(getByTestId("last name"),{target:{value:"gdfgd"}})
fireEvent.change(getByTestId("username-test"),{target:{value:"gdfgdf"}})
fireEvent.change(getByTestId("mobileno"),{target:{value:+919234567892}})
fireEvent.change(getByTestId("reg-email"),{target:{value:"tej@gmail.com"}})
fireEvent.change(getByTestId("reg-pwd"),{target:{value:"Tej@123@"}})
fireEvent.change(getByTestId("reg-pwd2"),{target:{value:"Tej@123@"}})
fireEvent.change(getByTestId("reg-pan"),{target:{value:"ccccc3456r"}})
fireEvent.change(getByTestId("country"),{target:{value:"india"}})
fireEvent.change(getByTestId("state"),{target:{value:"TELANGANA"}})
fireEvent.change(getByTestId("city"),{target:{value:"Hyederabad"}})
 })
 await act(async ()=>{
  fireEvent.click(getByTestId("btn-register"));
   })
   expect(mockfun).toHaveBeenCalled();



})



test (" test for validation of input values null",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId}=render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun}/></BrowserRouter></Provider>);
 
 await act(async ()=>{
  fireEvent.click(getByTestId("btn-register"));
   })
   expect(mockfun).toHaveBeenCalled();



})

test (" test for error validation of input values",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId}=render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun}/></BrowserRouter></Provider>);
 await act(async ()=>{
fireEvent.change(getByTestId("first name"),{target:{value:""}});
fireEvent.change(getByTestId("last name"),{target:{value:""}})
fireEvent.change(getByTestId("username-test"),{target:{value:"fffffffffffffffffffffff"}})
fireEvent.change(getByTestId("mobileno"),{target:{value:9877}})
fireEvent.change(getByTestId("reg-email"),{target:{value:"tej@gmail"}})
fireEvent.change(getByTestId("reg-pwd"),{target:{value:"Tej@123"}})
fireEvent.change(getByTestId("reg-pwd2"),{target:{value:"Tej@13@"}})
fireEvent.change(getByTestId("reg-pan"),{target:{value:"ccccc56r"}})
fireEvent.change(getByTestId("country"),{target:{value:""}})
fireEvent.change(getByTestId("state"),{target:{value:"TELANGANA"}})
fireEvent.change(getByTestId("city"),{target:{value:"Hyederabad"}})
 })
 await act(async ()=>{
  fireEvent.click(getByTestId("btn-register"));
   })
   expect(mockfun).toHaveBeenCalled(0);



})



