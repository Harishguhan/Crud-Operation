import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import Navbars from "./components/Navabar";
import HigerOrder from "./components/HigerOrder";
import NewOne from "./components/NewOne";
function App() {
  return (
    <Container>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbars />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/view' element={<ViewUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path="/hoc" element={<NewOne />} />
        </Routes>      
    </div>
     </Container>
  );
}

export default App;
