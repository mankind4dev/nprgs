import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./scene/navbar/Navbar";
import Footer from "./scene/footer/Footer";
import AboutUs from "./scene/about-us";
import ContactUs from "./scene/contact-us";
import Home from "./scene/home";
import OurServices from "./scene/our-services"; 
import SignUp from "./scene/auth-page/sign-up"; 
import SignIn from "./scene/auth-page/sign-in";
import NewsRoom from "./scene/mission-vision";

function App() { 

  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/our-services" element={<OurServices />} />
        <Route exact path="/news-room" element={<NewsRoom />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
