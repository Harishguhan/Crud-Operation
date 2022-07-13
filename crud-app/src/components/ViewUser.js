import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const ViewUser = () => {
  const navigate = useNavigate()
  const initialState = {
    loading: true,
    post: {},
    error: "",
  };
  const reduce = (state, action) => {
    switch (action.type) {
      case "pass":
        return {
          loading: false,
          post: action.user,
          error: "",
        };
      case "fail":
        return {
          loding: false,
          post: {},
          error: "SomeThing Went Wrong",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduce, initialState);
  const getcall = () => {
    axios
      .get("http://localhost:3007/posts")
      .then((res) => {
        dispatch({
          type: "pass",
          error: "",
          user: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "fail",
        });
      });
  };
  useEffect(() => {
    getcall();
  }, []);
  const Editdata = (id) =>{
    navigate(`/edit/${id}`)
  }
  const DeleteData = (e, demo) => {
    console.log("clicked");
    e.preventDefault();
    axios
      .delete(`http://localhost:3007/posts/${demo}`)
      .then((del) => {
        console.log(del);
        dispatch({
          type: "deleted",
          payload: demo,
        });
        getcall();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-center">List Of Users</h1>
      <Table striped bordered hover variant="dark">
        <thead className="text-center">
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>FullName</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {state.post.length > 0 &&
            state.post.map((demo) => {
              return (
                <tr>
                  <td>{demo.id}</td>
                  <td>{demo.username}</td>
                  <td>{demo.fullname}</td>
                  <td>{demo.email}</td>
                  <td>{demo.mobilenumber}</td>
                  <td>
                      <Button className="mx-3" onClick={()=>Editdata(demo.id)}>Edit</Button>
                    <Button
                      onClick={(e) => DeleteData(e, demo.id)}
                      className="bg-danger shadow-none outline-none mx-3"
                    >
                      Delete
                    </Button>
                  </td>
                  
                </tr>
                
              );
            })}
        </tbody>
      </Table>
      
      <Link to="/add">
        <Button className="mx-auto">Add Users</Button>
      </Link>
    </div>
  );
};

export default ViewUser;
