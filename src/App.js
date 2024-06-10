import "./App.css";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import People from "./pages/People.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>

    //   {/* <Navbar /> */}
    //   <Home />
    // </>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
