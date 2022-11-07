import React from "react";
import { useNavigate,Link } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { logout } from "../redux/userActions";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutFunc=(e)=>{
       e.preventDefault();
      dispatch(logout())
      navigate("/login" )
    }
    return (
        <div className="header">
            <div className="header-logo">
            <div className="logo" data-testid="loan-details" >
              <Link to="/loandetails">Loan Details</Link>  
            </div>
            <div className="logo" data-testid="apply-loan" onClick={()=> navigate("/loanApp")}>
              <Link to="/loanApp">  Apply Loan</Link>
            </div>
          
            </div>
            <div className="logo">
                Loan Application
            </div>
            <div className="btn" data-testid="sign-out"><Link onClick={logoutFunc}>Sign out</Link></div>
           
        </div>
    )
}
