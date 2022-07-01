import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";


function App() {
  return (
    <Container>
    <div className="App">
      <Routes>
        <Route path='/' element={<AddUser />} />
        <Route path='view' element={<ViewUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        </Routes>      
    </div>
     </Container>
  );
}

export default App;
