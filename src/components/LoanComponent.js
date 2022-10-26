import React from 'react';
import { useForm } from 'react-hook-form';

const LoanApplication = () => {
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Loan Application</h2>

                    <form id='loanform' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>


                        <input name="accountNumber" {...register("accountNumber", {
                            required: true,
                        })} placeholder='Enter Account Number' />

                        <select name="AccType" placeholder='Select Account Type' {...register('AccType')}>
                            <option value="Others">Others</option>
                            <option value="Current">Current</option>
                            <option value="Savings">Savings</option>
                        </select>
                        <input name="Income" {...register("Income", {
                            required: true,
                        })} placeholder='Enter Annual Income' />

                        <input name="loanAmount" {...register("loanAmount", {
                            required: true,
                        })} placeholder='Enter Loan Amount' />

                        <select name="duration" placeholder='Enter Loan Duration' {...register('duration')}>
                            <option value="6">6 months</option>
                            <option value="7">7 months</option>
                            <option value="8">8 months</option>
                            <option value="9">9 months</option>
                            <option value="10">10 months</option>
                            <option value="11">11 months</option>
                            <option value="12">12 months</option>
                            <option value="13">13 months</option>
                            <option value="14">14 months</option>
                            <option value="15">15 months</option>
                            <option value="16">16 months</option>
                            <option value="17">17 months</option>
                            <option value="18">18 months</option>
                            <option value="19">19 months</option>
                            <option value="20">20 months</option>
                            <option value="21">21 months</option>
                            <option value="22">22 months</option>
                            <option value="23">23 months</option>
                            <option value="24">24 months</option>
                        </select>
                        <select name="purpose" placeholder='Select Loan Purpose ' {...register('purpose')}>
                            <option value="Others">Others</option>
                            <option value="Car Purchase">Car Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Bussiness">Bussiness</option>
                        </select>

                        <button className='btn' data-testid="btn">Apply</button>

                    </form>

                </div>

            </div >
        </section >
    )
}

export default LoanApplication