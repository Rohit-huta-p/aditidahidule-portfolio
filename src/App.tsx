import { Instagram, Facebook, Youtube } from 'lucide-react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3')] bg-repeat bg-opacity-5">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Education />
      <Awards />
      <Gallery />
      <Contact />

      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
                <li><a href="#awards" className="hover:text-primary transition-colors">Awards</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>aditidahidule@gmail.com</li>
                <li><a href="tel:+919145255457">+91 9145255457</a></li>
                <li>Pune, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="social-icon hover:scale(200) transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/919673390378?text=Hello%20there!%20I'm%20interested%20in%20your%20services."
                  className="social-icon"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >        
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p>&copy; {new Date().getFullYear()} Priya Sharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;