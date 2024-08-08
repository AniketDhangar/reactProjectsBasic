import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Reviews from "./Reviews";
import Services from "./Services";
import Contact from "./Contact";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default MyRoutes;
