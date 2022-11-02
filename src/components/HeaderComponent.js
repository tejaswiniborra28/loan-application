import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="header-logo">
             <div className="logo" data-testid="loan-details" onClick={()=> navigate("/loandetails")}>
                Loan Details
            </div>
            <div className="logo" data-testid="apply-loan" onClick={()=> navigate("/loanApp")}>
                Apply Loan
            </div>
            </div>
            <div className="logo">
                Loan Application
            </div>
            <div className="sign-out btn" data-testid="sign-out" onClick={()=> navigate("/login")}>Sign out</div>
        </div>
    )
}