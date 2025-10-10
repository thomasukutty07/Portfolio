import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaReact, FaNodeJs, FaDatabase, FaServer, FaJs, FaHtml5, FaGitAlt, FaCode, FaFilePowerpoint, FaWpforms } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiOpenai,
  SiGooglechrome,
  SiPostman,
  SiUbuntu
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BrainCogIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SkillSphere from './components/SkillSphere';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "UrbanHut E-Commerce Website",
      description: "UrbanHut is a personal e-commerce website project built for learning and experimentation. This is not a commercial project, but a showcase of my skills in building modern online stores.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/thomasukutty07/UrbanHut", // update if actual repo is different
      liveLink: "https://e-com-1-8ewb.onrender.com/#/shop/home",
      image: "https://placehold.co/400x300/23232B/ffffff?text=UrbanHut+E-Commerce",
    },
    {
      title: "Baytebar",
      description: "A professional IT solution website developed as a commercial project. This project demonstrates my ability to deliver business-ready web solutions.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/it-solution-website",
      liveLink: "https://baytebar.com/",
      image: "https://placehold.co/400x300/23232B/ffffff?text=BAYTEBAR",
    },
    {
      title: "Bank Website",
      description: "A modern bank website project built for personal learning and experimentation. This is not a commercial project, but a showcase of my frontend and UI/UX skills.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/bank-website",
      liveLink: "https://stunning-scone-45b046.netlify.app/",
      image: "https://placehold.co/400x300/23232B/ffffff?text=Bank+Website",
    },
    {
      title: "Movie Website",
      description: "A movie website project created for personal learning and experimentation. This is not a commercial project, but a demonstration of my skills in building interactive web applications.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/movie-website",
      liveLink: "https://dynamic-cocada-c83d76.netlify.app/",
      image: "https://placehold.co/400x300/23232B/ffffff?text=Movie+Website",
    },
    {
      title: "Food Ordering Website",
      description: "A food ordering website project developed for personal learning and experimentation. This is not a commercial project, but a showcase of my skills in building modern web applications.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/food-ordering-website",
      liveLink: "https://silver-platypus-609adb.netlify.app/",
      image: "https://placehold.co/400x300/23232B/ffffff?text=Food+Ordering+Website",
    },
    {
      title: "College Website",
      description: "A college website project created for personal learning and experimentation. This is not a commercial project, but a demonstration of my skills in building educational web platforms.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/yourusername/college-website",
      liveLink: "https://magenta-cucurucho-c3f8ae.netlify.app/",
      image: "https://placehold.co/400x300/23232B/ffffff?text=College+Website",
    },
  ];

  const skills = [
    { name: "HTML 5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS 3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "React JS", icon: FaReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Shadcn", icon: BrainCogIcon, color: "#000000" },
    { name: "Web3Forms", icon: FaWpforms, color: "#FF6F61" },
    { name: "Node JS", icon: FaNodeJs, color: "#339933" },
    { name: "Express JS", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Mongoose", icon: FaDatabase, color: "#880000" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  const tools = [
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "ChatGPT", icon: SiOpenai, color: "#74AA9C" },
    { name: "Chrome", icon: SiGooglechrome, color: "#4285F4" },
    { name: "Impress", icon: FaFilePowerpoint, color: "#D3422A" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  ];

  const allSkills = [...skills, ...tools];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5ca4975c-ea30-422d-9aae-f579a5d73eaa",
          name: formData.firstName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ firstName: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="mx-auto px-8 pt-24">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection allSkills={allSkills} />
        <ContactSection
          formData={formData}
          formStatus={formStatus}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;