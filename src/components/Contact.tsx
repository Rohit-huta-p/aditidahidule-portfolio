import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Contact</h2>

 {/* WhatsApp icon and sliding text */}
 <div className="flex justify-center items-center mt-8 overflow-hidden">
          <motion.div
            className="relative flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} 
            
          >
            {/* WhatsApp Icon */}
            <FaWhatsapp className="text-green-500 text-4xl" />
            
            {/* Animated Text */}
            <motion.span
              className="absolute ml-14 text-lg font-thin text-white"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: -160, transition: { duration: 0.8, delay: 0.3 } },
              }}
            >
             WhatsApp:
            </motion.span>
          </motion.div>
        </div>
        <p className="text-center mt-5">or</p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full rounded-md bg-zinc-800 border-zinc-700 text-zinc-100 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md bg-zinc-800 border-zinc-700 text-zinc-100 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
         
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 p-2 block w-full rounded-md bg-zinc-800 border-zinc-700 text-zinc-100 shadow-sm focus:border-primary focus:ring-primary"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-primary text-zinc-900 font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
