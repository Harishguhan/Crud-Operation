import React, { useReducer, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [error,setError] = useState({})
  const onsubmit = (e) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if(!values.username){
      setError({...error,username:'Username Cannot be blank'})
    }else if(!values.fullname){
      setError({...error,fullname:'Full Name Cannot be blank'})
    }
    else if(!values.email){
      setError({...error,email:'Email Cannot be blank'})
    }
    else if(!values.mobilenumber){
      setError({...error,mobilenumber:'Mobile Cannot be blank'})
    } else if(values.mobilenumber.length !=10){
      setError({...error,mobilenumber:'Enter a valid Mobile Number'})
    }
    else{
    axios
      .post("http://localhost:3007/posts", values)
      .then((res) => {
        console.log("Posted success fully");
      })
      .catch((err) => {
        console.log(err);
      });
      navigate('/view')
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (!e.target.value) {
      setError({ ...error, [e.target.name]: `${e.target.name} cannot be blank` });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
  };
  return (
    <Container className="col-4">
      <Row>
        <Col>
          <Form>
            <div className="Adduser">
              <h1 className="text-center mt-5 mb-5">Add a users</h1>
              <Form.Group className="mt-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  value={values.username}
                  onChange={(e) => handlechange(e)}
                />
                <span style={{ color: "red" }}>{error.username}</span>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your FullName"
                  name="fullname"
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{ color: "red" }}>{error.fullname}</span> 
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(e) => handlechange(e)}
                />
              <span style={{ color: "red" }}>{error.email}</span>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobilenumber"
                  placeholder="Enter Your Mobile Number"
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{ color: "red" }}>{error.mobilenumber}</span>
              <div className="d-grid gap-2 mt-4">
                <Button  onClick={(e) => onsubmit(e)} variant="primary" size="lg">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default AddUser;
