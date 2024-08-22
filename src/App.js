import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Ví dụ về các trang
import About from './components/About';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Container from '@mui/material/Container';
import Resume from './components/Resume';
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
      
          {/* Các route khác nếu cần */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
