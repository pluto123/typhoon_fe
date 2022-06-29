import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;