import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
