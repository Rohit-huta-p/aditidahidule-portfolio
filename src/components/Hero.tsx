import { motion } from 'framer-motion';
import main from '../assets/about_me1.jpeg'
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        poster={main}
      >
        <source src="your-video-url.mp4"  />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          I'm Aditi Dahidule
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl"
        >
          Bharatanatyam Artist & Choreographer
        </motion.p>
      </div>
    </section>
  );
}