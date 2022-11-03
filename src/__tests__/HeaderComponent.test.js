import { render, fireEvent, act, cleanup } from '@testing-library/react';
import HeaderComponent from "../components/HeaderComponent";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";


afterEach(cleanup)


test(" testcase for logout ", async () => {
  const mockfun = jest.fn()
  const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><HeaderComponent onSubmit={mockfun} /></BrowserRouter></Provider>);

  await act(async () => {
    fireEvent.click(getByTestId("sign-out"));
  })
  // expect(mockfun).toHaveBeenCalled();

})


test(" testcase for apply loan ", async () => {
    const mockfun = jest.fn()
    const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><HeaderComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  
    await act(async () => {
      fireEvent.click(getByTestId("apply-loan"));
    })
    // expect(mockfun).toHaveBeenCalled();
  
  })

  test(" testcase for loan details ", async () => {
    const mockfun = jest.fn()
    const { getByTestId, getByRole } = render(<Provider store={store}><BrowserRouter><HeaderComponent onSubmit={mockfun} /></BrowserRouter></Provider>);
  
    await act(async () => {
      fireEvent.click(getByTestId("loan-details"));
    })
    // expect(mockfun).toHaveBeenCalled();
  
  })
  
