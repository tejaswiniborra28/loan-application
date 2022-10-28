import React, { useState } from 'react'
import { isValidPhoneNumber } from "react-phone-number-input";
import { useForm } from 'react-hook-form';
import stateData from '../states.json';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../redux/userActions";
import Popup from 'reactjs-popup';
import { AiFillQuestionCircle } from 'react-icons/ai';


const RegisterComponent = () => {
  const [submitRegister, setSubmitRegister] = useState(false)
  const registeredUsers = useSelector((state) => state.registeredUsers)
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data, e) => {
    console.log(registeredUsers);
    dispatch(registerUser(data));
    e.target.reset();
    setSubmitRegister(true);

  }


  return (
    <section>
      <div className="register">
        {submitRegister && <div>
          <span className="success-message">Registered successfully</span>
        </div>}
        <div className="col-1">
          <h2>Sign Up</h2>
          <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className='registerform'>
              <div className='row-1'>
                <div>
                  <input type="text" data-testid="first name" name="FirstName" {...register("FirstName", { required: true, maxLength: 10 })} placeholder='First Name' />
                  <p className='error-para'>
                    <span className='error'>{errors.FirstName?.type === "required" && "*first name is required"}</span>
                    <span className='error'>{errors.FirstName?.type === "maxLength" && "*first name should ne exceed 10 characters"}</span> </p></div>
                <div>
                  <input type="text" data-testid="last name" name="LastName" {...register("LastName", { required: true, maxLength: 10 })} placeholder='Last Name' />
                  <p className='error-para'>
                    <span className='error'>{errors.LastName?.type === "required" && "*last name is required"}</span>
                    <span className='error'>{errors.LastName?.type === "maxLength" && "*last name should ne exceed 10 characters"}</span> </p></div>

              </div>
              <div className='row-1'>
                 <div>
                                    <input type="text" {...register("username", { required: true, maxLength: 10 })} placeholder='username' />
                                    <p className='error-para'>
                                        <span className='error'>{errors.username?.type === "required" && "*user name is required"}</span>
                                        <span className='error'>{errors.username?.type === "maxLength" && "*user name should ne exceed 10 characters"}</span> </p></div> 
                <div>
                  <input data-testid="mobileno" name="mobile" {...register("mobile", { required: true, validate: (value) => isValidPhoneNumber(value) })} placeholder='mobile number' />
                  <p className='error-para'>
                    <span className='error'>{errors.mobile?.type === "required" && "*Mobile Number is required"}</span>
                    <span className='error'>{errors.mobile?.type === "validate" && "*please provide correct contact number"}</span>
                  </p></div>
                <div>
                  <input data-testid="reg-email" name="email" {...register("email", {
                    pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: "*please provide correct email id" }, required: true, validate: (value) => {

                      return !registeredUsers.includes(value);
                    }
                  })} placeholder='Email Address' />
                  <p className='error-para'>
                    <span className='error'>{errors.email?.type === "required" && "*Email is required"}</span>

                    <span className='error'>{errors.email?.message} </span></p></div>
              </div>
              <div className='row-1'>
                <div className="popup-wrapper">
                  <input data-testid="reg-pwd" type="password" name="password"{...register("password", {
                    required: true, pattern: {
                      value: /^([A-Z])(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,8}$/i,
                      message: "please enter valid password"
                    }
                  })} placeholder='password' />  <Popup className="popup" trigger={<a> <AiFillQuestionCircle /></a>}
                    position="right center">
                    <div>password criteria</div>
                    <ol>
                      <li>
                        start with capital letter
                      </li>
                      <li>
                        should contain atleast one number
                      </li>
                      <li>
                        should contain atleast one small letter
                      </li>
                      <li>
                        should contain atleast one special letter
                      </li>
                      <li>
                        password length greater than 5 and less than 8
                      </li>
                    </ol>

                  </Popup>
                  <p>
                    <span className='error'>{errors.password?.type === "required" && "*password is required"}</span>
                    <span className='error'>{errors.password?.message} </span></p></div>
                <div>
                  <input type="password" data-testid="reg-pwd2" name="confirmpwd" {...register("confirmpwd", {
                    required: true, validate: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    }
                  })} placeholder='confirm password' />
                  <p>
                    <span className='error'>{errors.confirmpwd?.type === "required" && "*confirm password is required"}</span>
                    <span className='error'>{errors.confirmpwd?.type === "validate" && "*password and confirm password are not equal"}</span>  </p></div>

                <div className="popup-wrapper">
                  <input name="pan" data-testid="reg-pan"  {...register("pan", { pattern: { value: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/i, message: "*please provide correct PAN Number" }, required: true })} placeholder='PAN Number' />
                  <Popup className="popup" trigger={<a> <AiFillQuestionCircle /></a>}
                    position="left center">
                    <div>PAN number criteria</div>
                    <ol>
                      <li>
                        first five and last should be alphabets
                      </li>
                      <li>
                        second four should be digits
                      </li>
                      <li>
                        Number should be of length 10
                      </li>

                    </ol>

                  </Popup>
                  <p>
                    <span className='error'>{errors.pan?.type === "required" && "*PAN number is required"}</span>
                    <span className='error'>{errors.pan?.message} </span>
                  </p>
                </div>
              </div>
              <div className='row-1'>
                <div>
                  <select name="country" data-testid="country"  placeholder='select country' {...register('country')}>
                    <option value="">select country</option>
                    <option value="india">India</option>

                  </select>
                </div>
                <div>
                  <select name="state" data-testid="state" placeholder='select state'{...register('state')}>
                    <option value="0">select state</option>
                    {stateData.data.map(e =>
                      <option value={e.id}>{e.state}</option>)}

                  </select></div>
                <div>
                  <select name="city" data-testid="city" placeholder='select city' {...register('city')}>
                    <option value="">select city</option>
                    {stateData.data.filter(ed => ed.id === watch('state'))[0]?.cities.map((e, index) => <option value={e}>{e}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className='registerbtn'>
              <button className='btn' data-testid="btn">Register</button>
              <div className='error'>{errors.email?.type === "validate" && "*User already registered. Please login"}</div>

                      <a>

                  <Link to="/login">Login here</Link>
                      </a>
                
            </div>
          </form>

        </div>
        {/* <div className="col-2">
                <img src={bgImg} alt="" />
            </div> */}
      </div>
    </section>
  )
}

export default RegisterComponent;
