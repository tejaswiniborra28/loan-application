import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import LoanComponent from "../components/LoanComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

afterEach(cleanup)
test (" test for validation of email input", ()=>{
    const onSubmit = jest.fn();
    render(<Provider store={store}>
       <BrowserRouter>
        <LoanComponent onSubmit={onSubmit} />
        </BrowserRouter>
        </Provider>)
    const heading= screen.getByText("Loan Application")
    expect(heading).toBeInTheDocument();  
    const label1= screen.getByText("Account Number:")
    expect(label1).toBeInTheDocument();  
    const inputEl = screen.getByTestId("account-number");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("name", "accountNumber");
    const inputE2 = screen.getByTestId("account-number");
    userEvent.type(inputE2, "4444-4444-4444");
 
    expect(screen.getByTestId("account-number")).toHaveValue("4444-4444-4444");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()


 
    const label2= screen.getByText("Loan Amount:")
    expect(label2).toBeInTheDocument();  
    const inputE5 = screen.getByTestId("loan-amount");
    expect(inputE5).toBeInTheDocument();
    expect(inputE5).toHaveAttribute("name", "loanAmount");
    const inputE6 = screen.getByTestId("loan-amount");
    userEvent.type(inputE6, "1111");
 
    expect(screen.getByTestId("loan-amount")).toHaveValue("1111");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()


    // it("submits", () => {
        // const onSubmit = jest.fn();
        // const { getByTestId } = render(<Form  />);
          const Abc= screen.getByTestId("btn")
        fireEvent.click(Abc);
        expect(onSubmit).toBeCalled();
    //   });
    
// })
// test (" test for validation of password input", ()=>{
//     render(<Provider store={store}>
//        <BrowserRouter>
//         <LoanComponent />
//         </BrowserRouter>
//         </Provider>)
//     const inputE3 = screen.getByTestId("password-test");
//     expect(inputE3).toBeInTheDocument();
//     expect(inputE3).toHaveAttribute("type", "password");
//     const inputE4 = screen.getByTestId("password-test");
//     userEvent.type(inputE4, "Any@2022");
 
//     expect(screen.getByTestId("password-test")).toHaveValue("Any@2022");
//     expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument()
//     })

//     test (" test for validation of password input", ()=>{
//         render(<Provider store={store}>
//            <BrowserRouter>
//             <LoanComponent />
//             </BrowserRouter>
//             </Provider>)
//     const btnIncrement = screen.getByTestId("btn");
//     fireEvent.click(btnIncrement);
 
//     expect(screen.getByTestId("btn")).toHaveTextContent("Login");

//     const register= screen.getByText("Register here")
//     expect(register).toBeInTheDocument();
})

