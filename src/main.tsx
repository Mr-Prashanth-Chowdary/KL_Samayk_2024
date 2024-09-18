import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

// Importing Components
import { SpotlightPreview } from './components/ui/SpotlightPreview.tsx'
import { TimelineDemo } from './components/ui/TimelineDemo.tsx'
import { SignupFormDemo } from './components/ui/SignupFormDemo.tsx'
import { LayoutGridDemo } from './components/ui/LayoutGridDemo.tsx'
import { About } from './components/ui/About/About.tsx'
import { FloatingNavDemo } from './components/ui/FloatingNavDemo.tsx';
import { AppleCardsCarouselDemo } from './components/ui/BottomCards/AppleCardsCarouselDemo.tsx';
import { Footer } from './components/ui/Footer/Footer.tsx';
import { LoginDemo } from './components/ui/LoginDemo.tsx';



// Create the root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route for About Page */}
        <Route path="/about" element={<About />} />

        {/* Route for Register Page */}
        <Route path="/Register" element={<SignupFormDemo />} />

        {/* Route for Login Page */}
        <Route path="/Login" element={<LoginDemo />} />
        
        {/* Main Route with all components */}
        <Route 
          path="/" 
          element={
            <>
            <FloatingNavDemo/>
              <SpotlightPreview />
              <TimelineDemo></TimelineDemo>
              <LayoutGridDemo />
              <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
              <Footer></Footer>
              {/* You can uncomment Countdown if needed */}
              {/* <Countdown /> */}
            </>
          } 
        />
      </Routes>
    </Router>
  </StrictMode>,
)
