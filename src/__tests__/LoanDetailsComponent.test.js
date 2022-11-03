import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import LoanDetailsComponent from "../components/LoanDetailsComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { useSelector, useDispatch } from 'react-redux';

afterEach(cleanup)
jest.mock("react-redux", () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    dispatch: jest.fn()
}))



describe("render loan details Component", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                currentUser: "tej@gmail.com",
                users: [{
                    FirstName: "jdjfjds",
                    LastName: "dgdfg",

                    email: "tej@gmail.com",
                    password: "Tej@123@",
                    mobile: +919873456782,
                    pan: "ccccc4567r",
                    loanDetails: {
                        applicationDate: new Date(),
                        accountNumber: "2222-3333-5555",
                        AccType: "Savings",
                        loanAmount: 50,
                        purpose: "Others",
                        duration: 5,
                        rateOfInterest: 10,
                        description: "applied loan"
                    }

                }],
                validated: true
            })
        })
    })
    test(" test for validation of password input", async () => {

        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoanDetailsComponent />
            </BrowserRouter>
        </Provider>)
    }

    )

})


describe("render component when  loan details are not present", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                currentUser: "tej@gmail.com",
                users: [{
                    FirstName: "jdjfjds",
                    LastName: "dgdfg",

                    email: "tej@gmail.com",
                    password: "Tej@123@",
                    mobile: +919873456782,
                    pan: "ccccc4567r",

                }],
                validated: true
            })
        })
    })
    test(" test for validation of password input", async () => {

        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoanDetailsComponent />
            </BrowserRouter>
        </Provider>)
    }

    )

})

describe("render loan details Component for purpose car", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                currentUser: "tej@gmail.com",
                users: [{
                    FirstName: "jdjfjds",
                    LastName: "dgdfg",

                    email: "tej@gmail.com",
                    password: "Tej@123@",
                    mobile: +919873456782,
                    pan: "ccccc4567r",
                    loanDetails: {
                        applicationDate: new Date(),
                        accountNumber: "2222-3333-5555",
                        AccType: "Savings",
                        loanAmount: 50,
                        purpose: "Car Loan",
                        duration: 5,
                        rateOfInterest: 10,
                    }

                }],
                validated: true
            })
        })
    })
    test(" test for validation of password input", async () => {

        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoanDetailsComponent />
            </BrowserRouter>
        </Provider>)
    }

    )

})

describe("render loan details Component for purpose home", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                currentUser: "tej@gmail.com",
                users: [{
                    FirstName: "jdjfjds",
                    LastName: "dgdfg",

                    email: "tej@gmail.com",
                    password: "Tej@123@",
                    mobile: +919873456782,
                    pan: "ccccc4567r",
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
                validated: true
            })
        })
    })
    test(" test for validation of password input", async () => {

        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoanDetailsComponent />
            </BrowserRouter>
        </Provider>)
    }

    )

})


