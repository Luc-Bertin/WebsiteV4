"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { SiMalt } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const fullText = "Hello, I'm Luc. A Backend Developer :)";
const technologies = [
  "Python",
  "FastAPI",
  "Flask",
  "Django",
  "Hydra",
  "Kratos",
  "Keto",
  "Airflow",
  "Docker",
  "Vue.js",
  "AsyncIO",
  "Websocket",
  "Pydantic",
  "Testing",
  "CI/CD",
  "AWS",
  "Django",
  "DRF",
  "Neo4j",
  "Redis",
  "SQL",
  "Qt",
  "Scraping",
  "Selenium",
  "R",
  "DL/ML",
  "Numpy/Pandas",
];

const clients = [
  { name: "Payplug", logo: "/logos/payplug2.webp" },
  { name: "Shadow2", logo: "/logos/shadow.jpg" },
  { name: "Carrier", logo: "/logos/carrier.svg" },
  { name: "BackMarket", logo: "/logos/backmarket.webp" },
  { name: "ESILV", logo: "/logos/esilv.jpg" },
  { name: "IIM", logo: "/logos/iim.png" },
  { name: "Exomind", logo: "/logos/exomind.jpg" },
  { name: "Flash Design", logo: "/logos/flash_design_logo.svg" },
];

export default function StylishIntroductionPage() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 text-white">
      <main className="container mx-auto px-4 py-16 relative">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h1 className="text-5xl font-bold mb-6 h-48 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight">
                {displayText}
              </h1>
              <p className="text-3xl mb-12 text-gray-300">
                Passionate about building robust and scalable backend systems
                that power the digital world.
              </p>

              {/* Buttons Section */}
              <div className="flex flex-wrap justify-start gap-6">
                {[
                  {
                    href: "https://github.com/Luc-Bertin",
                    icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.malt.fr/profile/lucbertin1",
                    icon: SiMalt,
                    label: "Malt",
                  },
                  {
                    href: "https://www.linkedin.com/in/luc-bertin-291904ab/",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "/resume_Luc.pdf",
                    icon: FaFileAlt,
                    label: "Resume/CV",
                  },
                  {
                    href: "https://blog.lucbertin.com/",
                    icon: FaChalkboardTeacher,
                    label: "Classes I Teach",
                  },
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link
                      href={link.href}
                      className=" glow-on-hover flex items-center gap-2 text-lg px-6 py-3 rounded-full bg-gradient-to-r from-indigo-800 to-blue-900 text-white font-semibold shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500"
                    >
                      <link.icon className="text-white" />
                      <span className="mr-2">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/3 mx-auto px-4 py-16"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50"></div>
                <Image
                  src="/luc.jpeg"
                  alt="Luc Bertin"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl relative w-full max-w-xs mx-auto md:max-w-sm"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-8 h-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Tech Stack I Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 text-left">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center text-[2rem] font-black text-gray-200"
                style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
              >
                <span className="flex items-baseline">
                  {tech}
                  <span className="ml-[0px] w-[8px] h-[8px] bg-yellow-500 inline-block"></span>
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Clients Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Clients I Have Worked With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={75}
                  className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Booking Section */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Turn your ideas into reality: schedule a meeting with me.
          </p>
          <Link
            href="https://calendly.com/lucbertin/meeting"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule on Calendly
          </Link>
        </motion.section>
      </main>
      <footer className="py-20 w-full bg-black">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          Luc Bertin © 2024
        </p>
      </footer>
    </div>
  );
}
