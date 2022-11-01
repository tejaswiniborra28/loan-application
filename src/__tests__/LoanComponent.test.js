import React from "react";
import { render, screen, waitFor, fireEvent, act, cleanup } from '@testing-library/react';
import LoanComponent from "../components/LoanComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import { useSelector, useDispatch } from 'react-redux';

afterEach(cleanup)


test(" test for validation of input values for loan", async () => {

  const mockfun = jest.fn()
  const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  await act(async () => {
    fireEvent.change(getByTestId("account-number"), { target: { value: "2222-1111-2222" } });
    fireEvent.change(getByTestId("income-test"), { target: { value: 20 } })
    fireEvent.change(getByTestId("loan-amount"), { target: { value: 50 } })
    fireEvent.change(getByTestId("duration-test"), { target: { value: "5" } })
    fireEvent.change(getByTestId("purpose-test"), { target: { value: "Car Loan" } })

  })
  await act(async () => {
    fireEvent.click(getByTestId("btn-loan"));
  })
  // expect(mockfun).toHaveBeenCalled();

})

test(" test for error  input values for loan", async () => {

  const mockfun = jest.fn()
  const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  
  await act(async () => {
    fireEvent.click(getByTestId("btn-loan"));
  })
  // expect(mockfun).toHaveBeenCalled();

})


test(" test for error validation of input values for loan", async () => {

  const mockfun = jest.fn()
  const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  await act(async () => {
    fireEvent.change(getByTestId("account-number"), { target: { value: "" } });
    fireEvent.change(getByTestId("income-test"), { target: { value: 20 } })
    fireEvent.change(getByTestId("loan-amount"), { target: { value: 90 } })
    fireEvent.change(getByTestId("purpose-test"), { target: { value: "Home Loan" } })

  })
  await act(async () => {
    fireEvent.click(getByTestId("btn-loan"));
  })
  // expect(mockfun).toHaveBeenCalled();



})


test(" test for error validation of input values for loan", async () => {

  const mockfun = jest.fn()
  const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun} /></BrowserRouter></Provider>);

  await act(async () => {
    fireEvent.click(getByTestId("btn-loan"));
  })
  // expect(mockfun).toHaveBeenCalled();

})


jest.mock("react-redux", () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  dispatch: jest.fn()
}))



describe("loan Component", () => {

  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback({
        registeredUsers: ["tej@gmail.com"],
        users: [{
          email: "tej@gmail.com",
          password: "Tej@123@",
          loanDetails: {
            applicationDate: new Date(),
            accountNumber: "2222-3333-5555",
            AccType: "Savings",
            loanAmount: 50,
            purpose: "Home Loan",
            duration: 5,
            rateOfInterest: 10,
        }
        }],
        currentUser: "tej@gmail.com",
        validated: false
      })
    })
  })
  test(" test for current user", async () => {
    const mockfun = jest.fn()
    const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><LoanComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  


  }
  )

})