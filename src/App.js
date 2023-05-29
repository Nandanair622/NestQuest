import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import Forgotpsswd from "./pages/Forgotpsswd";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Signup " element={<Signup />}></Route>
        <Route path="/Offers" element={<Offers />}></Route>
        <Route path="/Forgotpsswd" element={<Forgotpsswd />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
