import Menu from "./menu";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
function Menupg() {
  return (
    <div className="menupage">
      <div className="nav1">
        <Navbar />
      </div>
      <div className="men">
        <Menu />
      </div>
      <div className="foot1">
        <Footer />
      </div>
    </div>
  );
}

export default Menupg;
