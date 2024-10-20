import LoginAndSignUp from "./screens/LoginSignUp/LoginAndSignUp";
import NotFound from "./screens/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginAndSignUp />} />
        <Route path="/loginAndSignUp" element={<LoginAndSignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
