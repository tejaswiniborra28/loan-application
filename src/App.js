import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import LoanComponent from './components/LoanComponent';
import LoanDetailsComponent from './components/LoanDetailsComponent';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return ( <Provider store={store}>
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginComponent />}/>
          <Route path="login" element={<LoginComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="loanApp" element={<LoanComponent />} />
          <Route path="loandetails" element={<LoanDetailsComponent />} />
          {/* <Route path="*" element={<NoPage />} /> */}

      </Routes> 
     </BrowserRouter>  
    
    </div>
    </Provider>
  );
}

export default App;
