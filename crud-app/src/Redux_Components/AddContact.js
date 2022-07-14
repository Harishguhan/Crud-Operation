import React from "react";
import './AddContact.css'
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContact = () => {

    const [uname, setuname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const contacts = useSelector((state) => state);
 console.log(contacts)
  const handlesubmit = (e) =>{
    e.preventDefault();
    

    const data = {
        id:contacts[contacts.length-1].id+1,
        uname,
        email,
        number
    }
    dispatch({type:"ADD_CONTACT",payload:data})
    navigate('/viewcontact')

  }
  return (
    <div clasnumber="container">
      <div className="row welcome">
        <div className="col-lg-6">
          <img src='https://images.pexels.com/photos/6964134/pexels-photo-6964134.jpeg?auto=compress&cs=tinysrgb&w=1200' className="img-fluid rounded" alt="welcome" />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-3">Sign Up</h1>
          <form  className="registerform">
            <div className="form-group mt-2">
              <label>Username</label>
              <input type="text" className="form-control" name="uname" onChange={(e)=>setuname(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input type="text" className="form-control" name="email" onChange={(e)=>setemail(e.target.value)} />
            </div>
            <div className="form-group mt-3">
              <label>MobileNumber</label>
              <input type="text" className="form-control" name="mobilenumber" onChange={(e)=>setnumber(e.target.value)} />
            </div>
            <button onClick={handlesubmit} className="btn btn-info mt-4">submit</button>
            <button className="btn btn-warning mt-4 mx-4">Cancel</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default AddContact;
