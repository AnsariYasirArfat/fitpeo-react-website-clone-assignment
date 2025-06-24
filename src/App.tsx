import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Latest from "@/pages/Latest";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/latest" element={<Latest />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
