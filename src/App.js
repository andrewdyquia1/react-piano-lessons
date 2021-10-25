import { GlobalStyle } from './components/styles/GlobalStyle.styled'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Questions from './components/Questions'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Services />
      <About />
      <Questions />
      <Footer />
    </>
  );
}

export default App;