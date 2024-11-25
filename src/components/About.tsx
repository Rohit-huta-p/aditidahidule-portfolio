import { motion } from 'framer-motion';
import { Music, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Classical art patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              As a devoted practitioner of Bharatanatyam for over 15 years, I blend traditional classical dance with contemporary interpretations. My journey in this ancient art form has been one of continuous learning and spiritual growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Music className="w-8 h-8" />,
              title: "Classical Training",
              description: "Trained in the Pandanallur style, emphasizing precision and grace in movement"
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Artistic Philosophy",
              description: "Believing in dance as a medium of storytelling and spiritual expression"
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Modern Fusion",
              description: "Incorporating contemporary elements while preserving classical authenticity"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0"></div>
              <div className="relative bg-zinc-800 p-8 rounded-lg shadow-xl border border-primary/20 transform transition-transform group-hover:scale-105">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl italic text-zinc-300">
            "Dance is the hidden language of the soul"
            <footer className="text-primary mt-2">- Martha Graham</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}