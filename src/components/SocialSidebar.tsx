import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

export default function SocialSidebar() {
  return (
    <div className="fixed right-7 bottom-[-10vh] -translate-y-1/2 z-40 space-y-4">
      <a
        href="tel:+919145255457"
        className="social-icon"
        aria-label="Call"
        rel="noopener noreferrer"
      >        
        <IoMdCall className="w-5 h-5" />
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
      <a href="https://www.instagram.com/adi.ti_02/" className="social-icon" aria-label="Instagram">
        <Instagram className="w-5 h-5" />
      </a>

    </div>
  );
}