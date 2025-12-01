import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PhilGraph from "./components/phil";
import CraftClub from "./components/cozy-craft-club";
import JournalResources from "./components/journal/journal-resources";
import JournalBikol from "./components/journal/journal-bikol";
import JournalBonnet from "./components/journal/journal-bonnet";
import JournalMain from "./components/journal/journal";
import JournalReading from "./components/journal/journal-reading";
import JournalHandcrafted from "./components/journal/journal-handcrafted";
import JournalLove from "./components/journal/journal-love";
function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
          <Route index element={<Home />} />
          <Route path="journal/resources" element={<JournalResources />} />
          <Route path="journal/bikol" element={<JournalBikol />} />
          <Route path="craft/bonnet" element={<JournalBonnet />} />
          <Route path="journal" element={<JournalMain />} />
          <Route path="journal/reading" element={<JournalReading />} />
          <Route path="journal/handcrafted" element={<JournalHandcrafted />} />
          <Route path="journal/love" element={<JournalLove />} />

          <Route path="journal/philosophy" element={<PhilGraph />} />
          <Route path="recess." element={<CraftClub />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;