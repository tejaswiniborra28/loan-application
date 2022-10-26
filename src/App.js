import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import LoanComponent from './components/LoanComponent'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (<Provider store={store}>
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="loan" element={<LoanComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
