import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { login, updateCurrentUser } from "../redux/userActions";



const LoginComponent = () => {
    const registeredUsers = useSelector((state) => state.registeredUsers);
    const validated = useSelector((state) => state.validated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm()
    const onSubmit = data => {

        dispatch(login(data))

    };
    useEffect(() => {

        if (validated) {
            dispatch(updateCurrentUser(getValues().email));
            navigate("/loanApp")
        }
    }, [validated])

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Login</h2>
                    <form id='loginform' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                      <div className='login-input'>
                        <input data-testid="email-input" name="email" {...register("email", {
                            pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: "*please provide correct email id" }, required: true, validate: (value) => {

                                return registeredUsers.includes(value);
                            }
                        })} placeholder='Email Address' />
                        <p className='error-para'>
                            <span className='error'>{errors.email?.type === "required" && "*Email is required"}</span>

                            <span className='error'>{errors.email?.message} </span></p>
                 
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
             
                        <button className='btn' data-testid="btn">Login</button>
                        <div className='error'>{errors.email?.type === "validate" && "*if you are new user. Please register"}</div>


                         <div className="register-here"><Link to="/register">Register here</Link></div> 

                    </form>
                </div>
            </div>

        </section >
    )
}

export default LoginComponent;
