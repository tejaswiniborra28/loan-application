import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { applyLoan } from "../redux/userActions";
import Popup from 'reactjs-popup';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import HeaderComponent from './HeaderComponent';

const LoanComponent = () => {
    const [existingLoan, setExistingLoan] = useState(null);
    const [loanSubmitted, setLoanSubmitted] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const dispatch = useDispatch();
    const loandetails = useSelector((state) => state.users.filter((e) => e.email === state.currentUser));

    const watchpurpose = watch("purpose");

    const onSubmit = (data, e) => {

        dispatch(applyLoan(data)); e.target.reset();
        setLoanSubmitted(true);
        navigate("/loandetails");

    }
    return (<>
        <HeaderComponent />
        <section>
            <div className="register">
                {
                    loanSubmitted && <span> Loan Submitted Successfully</span>
                }
                {loandetails?.loanDetails === undefined ?
                    <div className="col-1">
                        <h2>Loan Application</h2>

                        <form id='loanform' data-testid="form1" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <div className="loan-field">
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

                                </div>
                                <div>
                                    <span className='error'>{errors.accountNumber?.type === "required" && "*Account Number is required"}</span>
                                    <span className='error'>{errors.accountNumber?.message} </span>

                                </div>
                            </div>
                            <div className="loan-field">
                                <div>
                                    <label>Account Type:</label>

                                    <div >

                                        <input data-testid="AccType-test1"
                                            {...register('AccType', { required: true })}
                                            type="radio"
                                            name="AccType"
                                            value="Current"
                                            id="Current"
                                        />{' '}
                                        Current
                                    </div>

                                    <div>

                                        <input data-testid="AccType-test"
                                            {...register('AccType', { required: true })}
                                            type="radio"
                                            name="AccType"
                                            value="Savings"
                                            id="Savings"
                                        />{' '}
                                        Savings

                                    </div>

                                    <div >

                                        <input data-testid="AccType-test"
                                            {...register('AccType', { required: true })}
                                            type="radio"
                                            name="AccType"
                                            value="Others"

                                            id="Others"
                                        />
                                        Others

                                    </div>
                                </div>

                                <div className="error">
                                    {errors.AccType?.type === 'required' && '*Account is required'}
                                </div>


                            </div>
                            <div className="loan-field">
                                <div>
                                    <label>Annual Income:</label>
                                    <input name="Income" data-testid="income-test" {...register("Income", {
                                        required: true,
                                    })} placeholder='Enter Annual Income' />
                                </div><div>
                                    <span className='error'>{errors.Income?.type === "required" && "*Income earned is required"}</span>
                                </div>
                            </div>
                            <div className="loan-field">
                                <div>
                                    <label>Loan Amount:</label>
                                    <input data-testid="loan-amount" name="loanAmount" {...register("loanAmount", {
                                        required: true, validate: (value) => {
                                            const { Income } = getValues();
                                            return value <= Income * 3
                                        }

                                    })} placeholder='Enter Loan Amount' />
                                </div><div>
                                    <span className='error'>{errors.loanAmount?.type === "required" && "*Loan amount is required"}</span>
                                    <span className='error'>{errors.loanAmount?.type === "validate" && `you are not eligible for loan more than ${getValues().Income * 3}`}</span>
                                </div>
                            </div>
                            <div className="loan-field">
                                <div>
                                    <label>Loan Duration:</label>
                                    <select name="duration" data-testid="duration-test" placeholder='Enter Loan Duration' {...register('duration')}>
                                        <option value="5">5 years</option>
                                        <option value="10">10 years</option>
                                        <option value="15">15 years</option>
                                        <option value="20">20 years</option>
                                    </select>
                                </div>
                                <div>
                                    <span className='error'>{errors.duration?.type === "required" && "*Loan duration is required"}</span>
                                </div>
                            </div>
                            <div className="loan-field">
                                <div>
                                    <label>Loan Purpose:</label>
                                    <select name="purpose" data-testid="purpose-test" placeholder='Select Loan Purpose ' {...register('purpose')}>
                                        <option value="Others">Others</option>
                                        <option value="Car Loan">Car Loan</option>
                                        <option value="Home Loan">Home Loan</option>
                                        <option value="Bussiness">Bussiness</option>
                                    </select>
                                </div> <div>
                                    <span className='error'>{errors.purpose?.type === "required" && "*Loan purpose is required"}</span>
                                </div>
                            </div>
                            {watchpurpose === "Others" &&
                                <div className="loan-field">
                                    <div>
                                        <label>Loan Purpose In detail:</label>
                                        <input name="description" data-testid="description-test" {...register("description", {
                                            required: true,
                                        })} />
                                    </div>
                                    <div>
                                        <span className='error'>{errors.description?.type === "required" && "*Loan purpose is required"}</span>
                                    </div>
                                </div>}

                            <div className="loan-field">
                                <div>
                                    <label>Rate Of Interest:</label>
                                    <input name="RofI" data-testid="RofI-test"
                                        value={watchpurpose === "Others" ? "10" : watchpurpose === "Car Loan" ? "7" : watchpurpose === "Home Loan" ? "8" : "10"}
                                        {...register("RofI", {
                                            required: true,
                                        })} /> </div>
                            </div>



                            <button className='btn' data-testid="btn-loan">Apply</button>

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
    </>
    )
}

export default LoanComponent;