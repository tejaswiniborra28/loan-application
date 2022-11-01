import React from "react";
import { render, screen, waitFor,fireEvent,act, cleanup } from '@testing-library/react';
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

    }
)



test (" test for validation of input values for loan",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId,getByRole }=render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun}/></BrowserRouter></Provider>);
 await act(async ()=>{
fireEvent.change(getByTestId("account-number"),{target:{value:"2222-1111-2222"}});
// fireEvent.change(getByTestId("AccType-test"),{target:{value:"Savings"}})
// const current = getByRole('radio', { id: 'Current' });
// fireEvent.click(current)
fireEvent.change(getByTestId("income-test"),{target:{value:20}})
fireEvent.change(getByTestId("loan-amount"),{target:{value:50}})
fireEvent.change(getByTestId("duration-test"),{target:{value:"5"}})
fireEvent.change(getByTestId("purpose-test"),{target:{value:"Car Loan"}})

 })
 await act(async ()=>{
  fireEvent.click(getByTestId("btn-loan"));
   })
   expect(mockfun).toHaveBeenCalled();



})



test (" test for error validation of input values for loan",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId,getByRole }=render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun}/></BrowserRouter></Provider>);
 await act(async ()=>{
fireEvent.change(getByTestId("account-number"),{target:{value:""}});
// fireEvent.change(getByTestId("AccType-test"),{target:{value:"Savings"}})
// const current = getByRole('radio', { id: 'Current' });
// fireEvent.click(current)
fireEvent.change(getByTestId("income-test"),{target:{value:20}})
fireEvent.change(getByTestId("loan-amount"),{target:{value:90}})
fireEvent.change(getByTestId("purpose-test"),{target:{value:"Home Loan"}})

 })
 await act(async ()=>{
  fireEvent.click(getByTestId("btn-loan"));
   })
   expect(mockfun).toHaveBeenCalled();



})


test (" test for error validation of input values for loan",async ()=>{

    const mockfun=jest.fn()
  const {getByTestId,getByRole }=render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun}/></BrowserRouter></Provider>);

 await act(async ()=>{
  fireEvent.click(getByTestId("btn-loan"));
   })
   expect(mockfun).toHaveBeenCalled();



})