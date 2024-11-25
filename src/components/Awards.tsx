import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import C1 from '../assets/C1.jpeg'
import C2 from '../assets/C2.jpeg'
import C3 from '../assets/C3.jpeg'
import C4 from '../assets/C4.jpeg'
const awards = [
  {
    year: '2023',
    image: C1,
    description: 'Ministry of Culture, India',
  },
  {
    year: '2023',
    image: C2,
    description: 'Ministry of Culture, India',
  },
  {
    year: '2023',
    image: C3,
    description: 'Ministry of Culture, India',
  },
  {
    year: '2023',
    image: C4,
    description: 'Ministry of Culture, India',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg shadow-lg"
            >
              <div className='flex items-center py-4'>
                <div className="flex items-center justify-center w-8 h-8  bg-primary/10 rounded-full">
                    <Award className="text-primary" />
                </div>
                <p className="text-sm text-primary font-semibold">{award.year}</p>
              </div>
              <img src={award.image}  />
              <p className="text-zinc-400 mt-1">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}