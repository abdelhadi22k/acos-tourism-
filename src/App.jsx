import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import './App.css'
import NaveBar from "./components/NaveBar";

function App() {

  return (
    <BrowserRouter>
    <NaveBar/>
    <Routes> 
      <Route path="/" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
