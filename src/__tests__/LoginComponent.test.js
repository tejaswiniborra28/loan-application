import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import LoginComponent from "../components/LoginComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { useSelector, useDispatch } from 'react-redux';


jest.mock("react-redux", () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    dispatch: jest.fn()
}))



describe("descibe", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                users: [{
                    email: "tej@gmail.com",
                    password: "Tej@123@"
                }],
                validated: false
            })
        })
    })
    test(" test for validation of password input", async () => {




        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        </Provider>)


        await act(async () => {

            fireEvent.change(getByTestId("email-input"), { target: { value: "tej@gmail" } })
            fireEvent.change(getByTestId("password-test"), { target: { value: "Tej@123@" } })

        })
        const btnIncrement = screen.getByTestId("btn");

        await act(async () =>
            fireEvent.click(btnIncrement))
    }

    )

})

describe("descibe2", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tej@gmail.com"],
                users: [{
                    email: "tej@gmail.com",
                    password: "Tej@123@"
                }],
                validated: true
            })
        })
    })
    test(" test for validation of password input", async () => {




        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        </Provider>)


        await act(async () => {

            fireEvent.change(getByTestId("email-input"), { target: { value: "tej@gmail" } })
            fireEvent.change(getByTestId("password-test"), { target: { value: "Tej@123@" } })

        })
        const btnIncrement = screen.getByTestId("btn");

        await act(async () =>
            fireEvent.click(btnIncrement))
    }

    )

})

describe("new user", () => {

    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback({
                registeredUsers: ["tejaswini@gmail.com"],
                users: [{
                   
                }],
                validated: false
            })
        })
    })
    test(" test for validation of password input", async () => {




        const { getByTestId } = render(<Provider store={store}>
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        </Provider>)


        await act(async () => {

            fireEvent.change(getByTestId("email-input"), { target: { value: "tej@gmail" } })
            fireEvent.change(getByTestId("password-test"), { target: { value: "Tej@123@" } })

        })
        const btnIncrement = screen.getByTestId("btn");

        await act(async () =>
            fireEvent.click(btnIncrement))
    }

    )

})
test(" test for error validation of password input", async () => {

    render(<Provider store={store}>
        <BrowserRouter>
            <LoginComponent />
        </BrowserRouter>
    </Provider>)
    const btnIncrement = screen.getByTestId("btn");
    await act(async () =>
        fireEvent.click(btnIncrement))

})


