import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Home from "../Component/Home";
import Contact from "../Component/Contact";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default MyRoutes;
