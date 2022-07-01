import React, { useReducer, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [error,setError] = useState({})
  const onsubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (!e.target.value) {
      setError({ ...error, [e.target.name]: `${e.target.name} cannot be blank` });
    } else {
      setError({ ...error, [e.target.name]: "" });
    }
    axios
      .post("http://localhost:3007/posts", values)
      .then((res) => {
        console.log("Posted success fully");
      })
      .catch((err) => {
        console.log(err);
      });
      // e.target.submit()
      navigate('/view')
      
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
    <Container className="col-5">
      <Row>
        <Col>
          <Form>
            <div className="Adduser">
              <h1 className="text-center mt-5 mb-5">Add a Username</h1>
              <Form.Group className="mt-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  value={values.username}
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <span style={{ color: "red" }}>{error.username}</span>
              <Form.Group className="mt-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your FullName"
                  name="fullname"
                  onChange={(e) => handlechange(e)}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(e) => handlechange(e)}
                />
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
              <div className="d-grid gap-2 mt-4">
                <Button  onClick={(e) => onsubmit(e)} variant="primary" size="lg">
                  Submit
                </Button>
                <Link to="view">
                  <Button variant="info" size="lg" className="user">
                    userlist
                  </Button>
                </Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default AddUser;
