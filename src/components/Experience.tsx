import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023',
    title: 'International Dance Festival',
    location: 'Singapore',
    description: 'Solo performance showcasing traditional Bharatanatyam pieces',
  },
  {
    year: '2022',
    title: 'Collaborative Performance',
    location: 'National Centre for Performing Arts, Mumbai',
    description: 'Featured dancer in "Rhythm Divine" - a fusion of classical and contemporary dance',
  },
  {
    year: '2021',
    title: 'Dance Drama Production',
    location: 'Kalakshetra Foundation, Chennai',
    description: 'Lead role in "Tales of Shiva" - a traditional dance drama',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Performance Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-32 flex-shrink-0">
                <span className="text-2xl font-bold text-primary">{exp.year}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">{exp.title}</h3>
                <p className="text-zinc-400 mb-2">{exp.location}</p>
                <p className="text-zinc-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}