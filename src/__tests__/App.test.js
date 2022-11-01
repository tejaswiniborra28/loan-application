import React from "react";
import { render, screen, waitFor,fireEvent,act, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test('renders  App component', () => {
    render(<App />);


  });
  