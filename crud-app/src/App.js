import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import Navbars from "./components/Navabar";
import Hoc from "./HigerOrder/Hoc";
import Final from "./HigerOrder/Final";
import Redux_one from "./Redux/Redux_one";
function App() {
  return (
    <Container>
    <div className="App">
      <Redux_one />
      {/* <Routes>
        <Route path="/" element={<Navbars />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/view' element={<ViewUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path="/hoc" element={<Hoc />} />
        <Route path="/hello" element={<Final /> } />
      </Routes>       */}
    </div>  
     </Container>
  );
}

export default App;
