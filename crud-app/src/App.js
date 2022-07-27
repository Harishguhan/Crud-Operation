import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import Hoc from "./HigerOrder/Hoc";
import Final from "./HigerOrder/Final";
import AddContact from "./Redux_Components/AddContact";
import ViewContact from "./Redux_Components/ViewContact";
import EditContact from "./Redux/reducers/EditContact";
import Counter from "./Toolkit/Counter";

// import Navbars from "./components/Navabar";

const LazyPart = lazy(() => import("./components/Navabar"));

function App() {
  return (
    <Container>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>Loding..</h1>}>
                <LazyPart />
              </Suspense>
            }
          />
          <Route path="/add" element={<AddUser />} />
          <Route path="/view" element={<ViewUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/hello" element={<Final />} />
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/viewcontact" element={<ViewContact />} />
          <Route path="/editcontact/:id" element={<EditContact />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
