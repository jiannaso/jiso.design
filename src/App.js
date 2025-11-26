import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog/blog-bikol";
import PhilGraph from "./components/phil";
import CraftClub from "./components/cozy-craft-club";
import BlogResources from "./components/blog/blog-resources";
import BlogBikol from "./components/blog/blog-bikol";
import BlogBonnet from "./components/blog/blog-bonnet";
import BlogMain from "./components/blog/blog";
import BlogReading from "./components/blog/blog-reading";
import BlogHandcrafted from "./components/blog/blog-handcrafted";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blog/resources" element={<BlogResources />} />
          <Route path="blog/bikol" element={<BlogBikol />} />
          <Route path="craft/bonnet" element={<BlogBonnet />} />
          <Route path="blog" element={<BlogMain />} />
          <Route path="blog/reading" element={<BlogReading />} />
          <Route path="blog/handcrafted" element={<BlogHandcrafted />} />

          <Route path="blog/philosophy" element={<PhilGraph />} />
          <Route path="craft/club" element={<CraftClub />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;