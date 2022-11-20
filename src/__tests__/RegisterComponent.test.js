import { render, fireEvent, act, cleanup } from '@testing-library/react';
import RegisterComponent from "../components/RegisterComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";


afterEach(cleanup)


test(" test for validation of input values", async () => {

    const mockfun = jest.fn()
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
    await act(async () => {
        fireEvent.change(getByTestId("first name"), { target: { value: "Teja" } });
        fireEvent.change(getByTestId("last name"), { target: { value: "Borra" } })
        fireEvent.change(getByTestId("username-test"), { target: { value: "Tejaswini" } })
        fireEvent.change(getByTestId("mobileno"), { target: { value: +919234567892 } })
        fireEvent.change(getByTestId("reg-email"), { target: { value: "tej@gmail.com" } })
        fireEvent.change(getByTestId("reg-pwd"), { target: { value: "Tej@123@" } })
        fireEvent.change(getByTestId("reg-pwd2"), { target: { value: "Tej@123@" } })
        fireEvent.change(getByTestId("reg-pan"), { target: { value: "ccccc3456r" } })
        fireEvent.change(getByTestId("country"), { target: { value: "india" } })
        fireEvent.change(getByTestId("state"), { target: { value:1 } })
        fireEvent.change(getByTestId("city"), { target: { value: "Bhimavaram" } })
    })
    await act(async () => {
        fireEvent.click(getByTestId("btn-register"),{FirstName:"fgfg",LastName:"Borra",username:"Tejaswini",mobile:"+911234567891",email:"Tej@gmail.com",password:"Tej@123@",confirmpwd:"Tej@123@",pan:"ccccc3456e",country:"india",state:1,city:"Bhimavaram"});
    })
    //expect(mockfun).toHaveBeenCalled();



})



test(" test for validation of input values null", async () => {

    const mockfun = jest.fn()
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun} /></BrowserRouter></Provider>);

    await act(async () => {
        fireEvent.click(getByTestId("btn-register"));
    })
   // expect(mockfun).toHaveBeenCalled(0);
})

test(" test for error validation of input values", async () => {

    const mockfun = jest.fn()
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><RegisterComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
    await act(async () => {
        fireEvent.change(getByTestId("first name"), { target: { value: "ggggggggggggggggggg" } });
        fireEvent.change(getByTestId("last name"), { target: { value: "hhhhhhhhhhhhhhhhhhhh" } })
        fireEvent.change(getByTestId("username-test"), { target: { value: "fffffffffffffffffffffff" } })
        fireEvent.change(getByTestId("mobileno"), { target: { value: 9877 } })
        fireEvent.change(getByTestId("reg-email"), { target: { value: "tej@gmail" } })
        fireEvent.change(getByTestId("reg-pwd"), { target: { value: "Tej@123" } })
        fireEvent.change(getByTestId("reg-pwd2"), { target: { value: "Tej@13@" } })
        fireEvent.change(getByTestId("reg-pan"), { target: { value: "ccccc56r" } })
        fireEvent.change(getByTestId("country"), { target: { value: "" } })
        fireEvent.change(getByTestId("state"), { target: { value: "TELANGANA" } })
        fireEvent.change(getByTestId("city"), { target: { value: "Hyederabad" } })
    })
    await act(async () => {
        fireEvent.click(getByTestId("btn-register"));
    })
   //  expect(mockfun).toHaveBeenCalled(0);
})
