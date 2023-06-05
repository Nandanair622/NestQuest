import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import CreateList from "./pages/CreateList";
import Forgotpsswd from "./pages/Forgotpsswd";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Profile" element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />}></Route>
          </Route>

          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/CreateList" element={<PrivateRoute />}>
            <Route path="/CreateList" element={<CreateList />}></Route>
          </Route>
          <Route path="/Forgotpsswd" element={<Forgotpsswd />}></Route>
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
