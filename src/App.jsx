import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import Navbar    from "./Components/Navbar";

/* Main pages */
import Home      from "./Pages/Home";
import Login     from "./Pages/Login";
import Inventory from "./Pages/Inventory";
import Cart      from "./Pages/Cart";
import Contact   from "./Pages/Contactus";
import MakeYourOwnCake from "./Pages/MakeYourOwn";  
/* Category pages */
import Cakes       from "./Pages/Product/Cakes";
import Bentocakes  from "./Pages/Product/Bentocakes";
import Brownie     from "./Pages/Product/Brownie";
import Cupcakes    from "./Pages/Product/Cupcakes";
import Jarcake     from "./Pages/Product/Jarcake";
import Cookies     from "./Pages/Product/Cookies";
import Celebration from "./Pages/Product/Celebration";
import Desserts    from "./Pages/Product/Desserts";
import Chocolates  from "./Pages/Product/Chocolates";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/login"     element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/cart"      element={<Cart />} />
<Route path="/contact"   element={<Contact />} />
            <Route path="/make-your-own" element={<MakeYourOwnCake />} />
            <Route path="/cakes"       element={<Cakes />} />
            <Route path="/bentocakes"  element={<Bentocakes />} />
            <Route path="/brownie"     element={<Brownie />} />
            <Route path="/cupcakes"    element={<Cupcakes />} />
            <Route path="/jarcake"     element={<Jarcake />} />
            <Route path="/cookies"     element={<Cookies />} />
            <Route path="/celebration" element={<Celebration />} />
            <Route path="/desserts"    element={<Desserts />} />
            <Route path="/chocolates"  element={<Chocolates />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;