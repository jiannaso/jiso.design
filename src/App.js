import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog/blog-bikol";
import PhilGraph from "./components/phil";
import CraftClub from "./components/cozy-craft-club";
import BlogResources from "./components/blog/blog-resources";
import BlogBikol from "./components/blog/blog-bikol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blog/resources" element={<BlogResources />} />
          <Route path="blog/bikol" element={<BlogBikol />} />
          <Route path="philosophy" element={<PhilGraph />} />
          <Route path="craftclub" element={<CraftClub />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;