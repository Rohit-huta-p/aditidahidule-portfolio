import { motion } from 'framer-motion';

const education = [
  {
    period: '2020-2023',
    course: 'B.A. Psychology',
    institution: 'M.E.S. Abasaheb Garware College, Pune',
    score: '61.59%',
  },
  {
    period: '2018-2019',
    course: 'H.S.C',
    institution: 'M.E.S. Abasaheb Garware College, Pune',
    score: '55.54%',
  },
  {
    period: '2016-2017',
    course: 'B.A. Psychology',
    institution: 'Vimlabai Garware School',
    score: '75.80%',
  },
  
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Education & Training</h2>
        <div className="relative">
          <div className="absolute left-4  md:left-1/2 h-full w-0.5 bg-primary/20" />
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col ${
                  index % 2 ? 'md:ml-1/2' : 'md:mr-1/2 md:items-end'
                }`}
              >
                <div className="bg-zinc-800  p-6 rounded-lg shadow-lg max-w-md">
                  <span className="text-primary font-bold">{edu.period}</span>
                  <h3 className="text-xl font-semibold mt-2 text-zinc-100">{edu.course}</h3>
                  <p className="text-zinc-400 mt-1">{edu.institution}</p>
                  <p className="text-zinc-300 mt-2">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}