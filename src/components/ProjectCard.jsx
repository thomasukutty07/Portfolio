import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#1E293B]/50 backdrop-blur-lg rounded-xl overflow-hidden transform transition-all duration-300 border border-[#334155]/30"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#60A5FA] transition-colors"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            {liveLink && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#34D399] transition-colors"
              >
                <FaExternalLinkAlt className="text-2xl" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-[#0F172A] text-[#60A5FA] rounded-full text-sm font-medium border border-[#334155]/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#60A5FA] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default ProjectCard; 