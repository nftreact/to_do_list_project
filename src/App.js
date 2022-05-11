import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashbord/>}/>
    </Routes>
  )
}
export default App
