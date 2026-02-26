import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
import Inventory from "./Pages/Inventory";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;