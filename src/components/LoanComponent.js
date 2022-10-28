import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { applyLoan } from "../redux/userActions";
import Popup from 'reactjs-popup';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const LoanComponent = () => {
    const [existingLoan, setExistingLoan] = useState(null);
    const [loanSubmitted, setLoanSubmitted] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const dispatch = useDispatch();
    const loandetails = useSelector((state) => state.users.filter((e) => e.email === state.currentUser));

    const watchpurpose = watch("purpose");

    const onSubmit = (data, e) => {
        console.log(data);
        dispatch(applyLoan(data)); e.target.reset();
        setLoanSubmitted(true);
        navigate("/loandetails");

    }
    return (
        <section>
            <div className="register">
                {
                    loanSubmitted && <span> Loan Submitted Successfully</span>
                }
                {loandetails?.loanDetails === undefined ?
                    <div className="col-1">
                        <h2>Loan Application</h2>

                        <form id='loanform' data-testid="form1" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Account Number:</label>
                                <input data-testid="account-number" name="accountNumber" {...register("accountNumber", {
                                    required: true, pattern: { value: /[0-9]{4}-[0-9]{4}-[0-9]{4}/i, message: "*please provide your 12 digit account number" }
                                })} placeholder='Enter Account Number' />
                                <Popup trigger={<a> <AiFillQuestionCircle /></a>}
                                    position="right center">
                                    <div>Account Number criteria</div>
                                    <ol>
                                        <li>
                                            Account number should be of format 2222-2222-2222
                                        </li>
                                        <li>
                                            should be of length 12
                                        </li>

                                    </ol>

                                </Popup>
                                <span className='error'>{errors.accountNumber?.type === "required" && "*Account Number is required"}</span>
                                <span  className='error'>{errors.accountNumber?.message} </span>
                            </div>
                            <div>
                                <label>Account Type:</label>
                                <div >
                                    <label htmlFor="Current">
                                        <input
                                            {...register('AccType', { required: true })}
                                            type="radio"
                                            name="AccType"
                                            value="Current"
                                            id="Current"
                                        />{' '}
                                        Current
                                    </label>
                                    <div>
                                        <label htmlFor="Savings">
                                            <input
                                                {...register('AccType', { required: true })}
                                                type="radio"
                                                name="AccType"
                                                value="Savings"
                                                id="Savings"
                                            />{' '}
                                            Savings
                                        </label>
                                    </div>

                                    <div >
                                        <label htmlFor="Others">
                                            <input
                                                {...register('AccType', { required: true })}
                                                type="radio"
                                                name="AccType"
                                                value="Others"

                                                id="Others"
                                            />
                                            Others
                                        </label>
                                    </div>

                                    <div className="error">
                                        {errors.AccType?.type === 'required' && '*Account is required'}
                                    </div>
                                </div>

                            </div>
                            <div>
                                <label>Annual Income:</label>
                                <input name="Income" {...register("Income", {
                                    required: true,
                                })} placeholder='Enter Annual Income' />
                                <span className='error'>{errors.Income?.type === "required" && "*Income earned is required"}</span>

                            </div>
                            <div>
                                <label>Loan Amount:</label>
                                <input data-testid="loan-amount" name="loanAmount" {...register("loanAmount", {
                                    required: true, validate: (value) => {
                                        const { Income } = getValues();
                                        return value <= Income * 3
                                    }

                                })} placeholder='Enter Loan Amount' />
                                <span className='error'>{errors.loanAmount?.type === "required" && "*Loan amount is required"}</span>
                                <span className='error'>{errors.loanAmount?.type === "validate" && `your are eligible for loan more than ${getValues().Income * 3}`}</span>

                            </div>
                            <div>
                                <label>Loan Duration:</label>
                                <select name="duration" placeholder='Enter Loan Duration' {...register('duration')}>
                                    <option value="5">5 years</option>
                                    <option value="10">10 years</option>
                                    <option value="15">15 years</option>
                                    <option value="20">20 years</option>
                                </select>
                                <span className='error'>{errors.duration?.type === "required" && "*Loan duration is required"}</span>

                            </div>
                            <div>
                                <label>Loan Purpose:</label>
                                <select name="purpose" placeholder='Select Loan Purpose ' {...register('purpose')}>
                                    <option value="Others">Others</option>
                                    <option value="Car Loan">Car Loan</option>
                                    <option value="Home Loan">Home Loan</option>
                                    <option value="Bussiness">Bussiness</option>
                                </select>
                                <span className='error'>{errors.purpose?.type === "required" && "*Loan purpose is required"}</span>

                            </div>
                            {watchpurpose === "Others" &&
                                <div>
                                    <label>Loan Purpose In detail:</label>
                                    <input name="description" {...register("description", {
                                        required: true,
                                    })} />
                                    <span className='error'>{errors.description?.type === "required" && "*Loan purpose is required"}</span>

                                </div>}

                            <div>
                                <label>Rate Of Interest:</label>
                                <input name="RofI"
                                    value={watchpurpose === "Others" ? "10" : watchpurpose === "Car Loan" ? "7" : watchpurpose === "Home Loan" ? "8" : "10"}
                                    {...register("RofI", {
                                        required: true,
                                    })} />
                            </div>



                            <button className='btn' data-testid="btn">Apply</button>

                        </form>

                    </div> :
                    <div>
                        <span className='error'> you have no permission to apply loan <br></br>
                            reason: User had alreaady for loan
                        </span>

                    </div>
                }
            </div >
        </section >
    )
}

export default LoanComponent;