import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import HeaderComponent from "./HeaderComponent";
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword } from "../redux/userActions";



const UpdateComponent = () => {
    const [submitUpdate, setSubmitUpdate] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const userEmail = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();

    const onSubmit = (data, e) => {
        console.log(userEmail, getValues("password"));

        dispatch(updatePassword(data));
        e.target.reset();
        setSubmitUpdate(true);
        //dispatch(login(data))

    };
    return (<>
        <HeaderComponent />
        <section>
            <div className="register">
                {submitUpdate && <div>
                    <span className="success-message">Updated successfully</span>
                </div>}
                <div className="col-1">
                    <h2>Update password</h2>
                    <form id='updateform' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-input">


                            <input data-testid="email" name="email"  {...register("email")} placeholder='Email Address' defaultValue={userEmail} />

                        </div>

                        <div className='login-input'>
                            <input type="password" data-testid="password-test" {...register("password", {
                                required: true, pattern: {
                                    value: /^([A-Z])(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,8}$/i,
                                    message: "length min 5 and max 8,start with capital letter, one or more small letters, number and special characters"
                                }
                            })} placeholder='password' />
                            <p className='error-para'>
                                <span className='error'>{errors.password?.type === "required" && "*password is required"}</span>
                                <span className='error'>{errors.password?.message} </span>
                            </p>
                        </div>

                        <button className='btn' data-testid="btn">update</button>
                        <div className='error'>{!userEmail && "*Please login to update password"}</div>




                    </form>
                </div>
            </div>

        </section ></>
    )
}

export default UpdateComponent