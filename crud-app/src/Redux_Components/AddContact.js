import React from "react";
import "./AddContact.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddContact = () => {
  const notify = () =>{
    toast.success('student added sucessfully',{autoClose :1000})
}  
  const [details,setdetails] = useState({});
  const [error,setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state);

  const handlechange = (e) =>{
    setdetails({...details,[e.target.name]:e.target.value})
    if(!e.target.value){
      setError({ ...error, [e.target.name]: `${e.target.name} cannot be blank` });
    } else {
      setError('')
    }
}
  const handlesubmit = (e) => {
    
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    setdetails({...details,[e.target.name]:e.target.value})
    if(!details.name){
      setError({...error,name:'Name cannot be blank'});
    }else if(!details.email){
      setError({...error,email:'Email cannot be blank'})
    }else if(!details.email.match(regEx)){
      setError({...error,email:'Enter a valid email address'})
    }else if(!details.mobilenumber){
      setError({...error,mobilenumber:'Mobilenumber cannot be blank'})
    }else if(!details.mobilenumber.match(phoneno)){
      setError({...error,mobilenumber:'Enter a valid Mobilenumber'})
    }
    else if(!details.address){
      setError({...error,address:'Address cannot be blank'})
    }
    else {
    const data = {
      id: contacts.length+1,
      name:details.name,
      email:details.email,
      mobilenumber:details.mobilenumber,
      address:details.address,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    notify();
    navigate("/viewcontact");
  }
  };
  return (
    <div clasnumber="container">
      <div className="row welcome">
        <div className="col-lg-6">
          <img
            src="https://images.pexels.com/photos/6964134/pexels-photo-6964134.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="img-fluid rounded"
            alt="welcome"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-3">Student Data</h1>
          <form className="registerform">
            <div className="form-group mt-2">
              <label>Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                onChange={(e)=>handlechange(e)}
              />
              <span style={{color:'red'}}>{error.name}</span>
            </div>
            <div className="form-group mt-3">
              <label>Student Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter your Email"
                onChange={(e)=>handlechange(e)}
              />
              <span style={{color:'red'}}>{error.email}</span>
            </div>
            <div className="form-group mt-3">
              <label>Student MobileNumber</label>
              <input
                type="text"
                className="form-control"
                name="mobilenumber"
                placeholder="Enter your MobileNumber"
                onChange={(e)=>handlechange(e)}
              />
              <span style={{color:'red'}}>{error.mobilenumber}</span>
            </div>
            <div className="form-group mt-3">
              <label>Student Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Enter your City Name"
                onChange={(e)=>handlechange(e)}
              />
               <span style={{color:'red'}}>{error.address}</span>
            </div>
            <Link to="/viewcontact">
              <button className="btn btn-warning mt-4 mx-4">Cancel</button>
            </Link>
            <button type="submit" onClick={(e)=>handlesubmit(e)} className="btn btn-info mt-4">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
