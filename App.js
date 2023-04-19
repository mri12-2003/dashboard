import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
// import Home from "./Components/Home";
import Mainpage from "./Components/Mainpage";
import Recoverpass from "./Components/Recoverpass";
import Invalidpage from "./Components/Invalidpage";
import Transaction from "./Components/Component2/Transaction";
import Users from "./Components/Component2/Users";
import Schedules from "./Components/Component2/Schedules";
import Settings from "./Components/Component2/Settings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          {/* <Route path="/Signin" element={<Signin />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Mainpage" element={<Mainpage />} />

          <Route path="/Recoverpass" element={<Recoverpass />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Schedules" element={<Schedules />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<Invalidpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
