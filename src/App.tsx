import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Team } from './components/sections/Team';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
