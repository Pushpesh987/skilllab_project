import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import NoPage from "./Components/Nopage";

const App=()=>{
  return(
    
    <>
    <BrowserRouter>
      <Routes>
          
            <Route path="*" element={<NoPage />} />
            <Route path="create" element={<Create />} />
            <Route index element={<Home />} />
            
            
          
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;