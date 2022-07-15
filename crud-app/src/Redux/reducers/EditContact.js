import React, { useEffect, useState } from "react";
import "./EditContact.css";
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditContact = () => {

  const update = () =>{
    toast.success('Student Update Successfully')
  }


  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [number,setnumber] = useState('');
  const [address,setaddress] = useState('');
  const { id } =useParams();
  const editdata = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curent = editdata.find(editdata => editdata.id === parseInt(id));
    

  useEffect(()=>{
    if(curent){
      setname(curent.name),
      setemail(curent.email),
      setnumber(curent.number),
      setaddress(curent.address)
    }
  },[curent])
  const updatedata = (e) =>{
    e.preventDefault();

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
      address,
    };
    dispatch({
      type:'UPDATE_DATA',
      payload:data
    })
    update();
    navigate('/viewcontact')

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
            <h1 className="mb-3 mt-4">Edit Data</h1>
            <form className="registerform">
              <div className="form-group mt-2">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="uname"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>MobileNumber</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobilenumber"
                  value={number}
                  onChange={(e)=>setnumber(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={(e)=>setaddress(e.target.value)}
                />
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
