import LoginAndSignUp from "./screens/LoginSignUp/LoginAndSignUp";
import NotFound from "./screens/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndSignUp />} />
        <Route path="/loginAndSignUp" element={<LoginAndSignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
