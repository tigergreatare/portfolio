import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App;
