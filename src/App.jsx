import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainpage from "./Pages/Mainpage";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Mainpage />
    </>
  )
}

export default App
