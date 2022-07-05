import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useParams,useNavigate } from 'react-router-dom';
const EditUser = () => {
  const navigate = useNavigate()
  const [data,setdata] = useState({})
  const [error,setError] = useState({})
 console.log(data)
  let { id } = useParams()
  console.log(id)


  const handlechange = (e) =>{
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    if(!e.target.value){
      setError({...error,[e.target.name]:`${e.target.name} is required`})
    }
    else{
      setError({...error,[e.target.name]:''})
    }
  } 

  const updateData = (e) =>{
    if(!data.username){
      setError({...data,username:'Name cannot be blank'})
    }else if(!data.fullname){
      setError({...data,fullname:'fullname cannot be blank'})
    }else if(!data.email){
      setError({...data,email:'email cannot be blank'})
    }else if(!data.mobilenumber){
      setError({...data,mobilenumber:'mobilenumber cannot be blank'})
    }else if(data.mobilenumber.length != 10){
      setError({...data,mobilenumber:'Enter a valid mobile number'})
    }
    else{
    axios.put(`http://localhost:3007/posts/${id}`,data)
    .then(res =>{
      console.log("data added")
      navigate('/view')
    })
    .catch(err =>{
      console.log(err)
    })
  }
}
  useEffect(()=>{
  axios.get(`http://localhost:3007/posts/${id}`)
  .then((res) =>{
    setdata(res.data)
  })
  .catch((err) =>{
    console.log(err)
  })
  },[])
  
  return (
    <Container className="col-5">
      <Row>
        <Col>
          <Form>
            <div className="Adduser">
              <h1 className="text-center mt-5 mb-5">Edit the User Data</h1>
              <Form.Group className="mt-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  value={data.username}
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{color:"red"}}>{error.username}</span>
              <Form.Group className="mt-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your FullName"
                  name="fullname"
                  value={data.fullname}
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{color:"red"}}>{error.fullname}</span>
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{color:"red"}}>{error.email}</span>
              <Form.Group className="mt-4">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobilenumber"
                  placeholder="Enter Your Mobile Number"
                  value={data.mobilenumber}
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{color:"red"}}>{error.mobilenumber}</span>
              <div className="d-grid gap-2 mt-4">
                <Button onClick={(e) => updateData(e)} variant="success" size="lg">
                Update
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditUser