import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import './App.css';
import MyArsenal from './components/MyArsenal';
import Offer from './components/Offer';

import AdminProjects from './components/AdminProjects';
import MyCreations from "./components/MyCreations";
import AdminProjects2 from './components/AdminProjects2';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConnectedDots from './components/ConnectedDots';
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="relative">
      {/* Background connected dots */}
      <ConnectedDots />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <br /><br /><br />
        {/* <section id="home" className="h-screen scroll-mt-24"><Main /></section>
        <section id="about" className="h-screen md:h-auto scroll-mt-24"><AboutMe /></section>
        <section id="skills" className="h-screen scroll-mt-24"><MyArsenal /></section>
        <section id="services" className="h-screen scroll-mt-24"><Offer /></section>
        <section id="projects" className="min-h-screen scroll-mt-24"><Projects /></section>
        <section id="design" className="min-h-screen scroll-mt-24"><MyCreation /></section>
        <section id="contact" className="h-screen scroll-mt-24"><ContactSection /></section>
        <section id="footer" className="h-screen scroll-mt-25 mt-100"><Footer /></section> */}


            {/* Home Section: min-h-screen content ko overflow hone se bachayega */}
<section id="home" className="min-h-screen flex items-center scroll-mt-24">
  <Main />
</section>

{/* About Section: h-auto mobile ke liye best hai, desktop par min-h-screen */}
<section id="about" className="min-h-screen md:h-auto py-12 scroll-mt-24">
  <AboutMe />
</section>

<section id="skills" className="min-h-screen py-12 scroll-mt-24">
  <MyArsenal />
</section>

<section id="services" className="min-h-screen py-12 scroll-mt-24">
  <Offer />
</section>

<section id="projects" className="min-h-screen py-12 scroll-mt-24">
  <MyWork /> 
</section>

<section id="design" className="min-h-screen py-12 scroll-mt-24">
  <MyCreations />
</section>

<section id="contact" className="min-h-screen py-12 scroll-mt-24">
  <ContactSection />
</section>

{/* Footer: Footer ko kabhi bhi h-screen mat den, h-auto rakhen */}
<section id="footer" className="h-auto py-10 scroll-mt-24">
  <Footer />
</section>

        <BrowserRouter>
          <Routes>
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/projects2" element={<AdminProjects2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
