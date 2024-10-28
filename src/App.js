import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Community from './pages/Community';
import JupiterTerminal from './components/JupiterTerminal';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <JupiterTerminal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/community" element={<Community />} />

        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
