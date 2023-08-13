import {
  About,
  Footer,
  Logos,
  Menu,
  Mobile,
  Navbar,
  Offer,
  Outlets,
  Services,
} from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Menu />
    <Services />
    <Outlets />
    <Offer />
    <About />
    <Mobile />
    <Logos />
    <Footer />
  </BrowserRouter>
);

export default App;
