import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import ContainerExample from "./pages/bootStrapPractices/ContainerExample";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";

import Album from "./pages/albumPage/Album";
import Blog from "./pages/blogs/Blog";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/containerExample" element={ <ContainerExample/> } />
        <Route path="/about-us" element={ <AboutUsPage/> } />

        <Route path="/album" element={ <Album/> } />
        <Route path="/blog" element={ <Blog/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
