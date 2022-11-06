import React from 'react';
import { useSelector } from 'react-redux';
import HeaderComponent from './HeaderComponent';

const LoanDetailsComponent = () => {
    const loandetails = useSelector((state) => state.users.filter((e) => e.email === state.currentUser))[0];
    let loanpurpose=null;
    let rateOfInterest=null;
    let monthlyPayment=null;
    if (loandetails?.loanDetails) {

        loanpurpose = loandetails.loanDetails.purpose;
        rateOfInterest = loanpurpose === "Others" ? 10 : loanpurpose === "Car Loan" ? 7 : loanpurpose === "Home Loan" ? 8 : 10;
        monthlyPayment = (((rateOfInterest / 100) * (loandetails.loanDetails.loanAmount * 100000)) + (loandetails.loanDetails.loanAmount * 100000)) / (loandetails.loanDetails.duration * 12)
    }
    return (<>
        <HeaderComponent />
        <div className="register">

            {loandetails?.loanDetails ? <>
                <h2 className='head-loan'>LoanDetails</h2>
                <div className="loan-details">
                    <div  >
                        <label>Loan Applied on:</label>
                        <span>{loandetails.loanDetails.applicationDate.toLocaleDateString('en-CA')}</span>
                    </div>
                    <div>
                        <label>Applied By:</label>
                        <span>{loandetails.FirstName + " " + loandetails.LastName} </span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{loandetails.email}</span>
                    </div>
                    <div>
                        <label>Contact:</label>
                        <span>{loandetails.mobile}</span>
                    </div>
                    <div>
                        <label>PAN Number</label>
                        <span>{loandetails.pan} </span>
                    </div>
                    <div>
                        <label>Account Number:</label>
                        <span>{loandetails.loanDetails.accountNumber} </span>
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <span>{loandetails.loanDetails.AccType} </span>
                    </div>
                    <div>
                        <label>Loan Amount</label>
                        <span>{loandetails.loanDetails.loanAmount * 100000}</span>
                    </div>
                    <div>
                        <label>Loan Purpose:</label>
                        <span>{loandetails.loanDetails.purpose} </span>
                    </div>
                    <div>
                        <label>Loan Duration:</label>
                        <span> {loandetails.loanDetails.duration + " years"} </span>
                    </div>
                    {loandetails.loanDetails.description && <div>
                        <label>Loan Purpose in Detail:</label>
                        <span> {loandetails.loanDetails.description} </span>
                    </div>}
                    <div>
                        <label>Rate Of Interest:</label>
                        <span>{rateOfInterest}</span>

                    </div>
                    <div>
                        <label>Amount to be paid monthly:</label>
                        <span>{Math.round(monthlyPayment)} </span>
                    </div>
                </div>

            </>
                : <h2>Loan details are not available</h2>} </div> </>
    )
}

export default LoanDetailsComponent
