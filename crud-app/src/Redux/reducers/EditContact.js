import React, { useEffect, useState } from "react";
import "./EditContact.css";
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactReducer from "./ContactReducer";
const EditContact = () => {


  const [data,setdata] = useState({});
  const [error,setError] = useState({});
  const update = () =>{
    toast.success('Student Update Successfully',{autoClose :1000})
  }
  const handlechange = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
    if(!e.target.value){
      setError({ ...error, [e.target.name]: `${e.target.name} cannot be blank` });
    } else {
      setError('')
    }
}
  const { id } =useParams();
  const editdata = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curent = editdata.find(editdata => editdata.id === parseInt(id));
  

  useEffect(()=>{
    if(curent){
      setdata(curent)
    }
  },[curent])
  const updatedata = (e) =>{
    e.preventDefault();
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!data.name){
      setError({...error,name:'Name cannot be blank'})
    } else if(!data.email){
      setError({...error,email:'Email cannot be blank'})
    }else if(!data.mobilenumber){
      setError({...error,mobilenumber:'Mobilenumber cannot be blank'})
    } else if(!data.address){
      setError({...error,address:'Address cannot be blank'})
    }
  else{
    const datas = {
      id: parseInt(id),
      name:data.name,
      email:data.email,
      mobilenumber:data.mobilenumber,
      address:data.address,
    };
   
    dispatch({
      type:'UPDATE_DATA',
      payload:datas
    })
    update();
    navigate('/viewcontact')
  }
  } 
  return (
    <div className="container">
      { curent ?(
        <>
      <div className="row rto">
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="..."
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="mb-3 mt-4">Edit Student id {data.id}</h1>
            <form className="registerform">
              <div className="form-group mt-2">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={(e)=>handlechange(e)}
                />
                <span style={{color:'red'}}>{error.name}</span>
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={(e)=>handlechange(e)}
                />
                 <span style={{color:'red'}}>{error.email}</span> 
              </div>
              <div className="form-group mt-3">
                <label>MobileNumber</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobilenumber"
                  value={data.mobilenumber}
                  onChange={(e)=>handlechange(e)}
                />
              <span style={{color:'red'}}>{error.mobilenumber}</span>
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={data.address}
                  onChange={(e)=>handlechange(e)}
                />
                <span style={{color:'red'}}>{error.address}</span>
              </div>
              <button onClick={(e)=>updatedata(e)} className="btn btn-success mt-4">
                Update
              </button>
              <Link to="/viewcontact">
                <button className="btn btn-secondary mt-4 mx-4">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
        </>
           ):<p>No data</p>}
      </div>
   
  );
};

export default EditContact;
