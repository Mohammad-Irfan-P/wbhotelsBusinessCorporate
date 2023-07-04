import logo from "./logo.svg";
import "./App.css";
import { Form } from "formik";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer/Footer";
import Booking from "./Pages/Booking/Booking";
import Innovative from "./Pages/Innovative/Innovative";
import Stories from "./Pages/Stories/Stories";
import UpperFooter from "./Layout/UpperFooter/UpperFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Booking />
      <Innovative />
      <Stories />
      <UpperFooter />
      <Footer />
      
    </div>
  );
}

export default App;
