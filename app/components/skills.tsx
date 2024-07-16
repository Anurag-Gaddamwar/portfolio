// D:\PROJECTS\Portfolio\portfolio\app\components\skills.tsx
import React, { ReactNode, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaJava, FaAws, FaGithub } from "react-icons/fa";
import Image from "next/image";
import {
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

interface SkillIcons {
  [key: string]: JSX.Element | ReactNode;
}

interface SkillCardProps {
  skill: string;
  className?: string;
}

const skillIcons: SkillIcons = {
  C: <SiC />,
  Java: <FaJava />,
  SQL: (
    <Image
      src="/sql.svg"
      alt="SQL logo"
      width={24}
      height={24}
      style={{ filter: "invert(41%)", color: "#FFFF" }}
    />
  ),
  MongoDB: <SiMongodb />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  "React.js": <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  "Next.js": <SiNextdotjs />,
  "Express.js": <SiExpress />,
  "Node.js": <SiNodedotjs />,
  AWS: <FaAws />,
  Figma: <SiFigma />,
  Canva: <SiCanva />,
  "Adobe Photoshop": <SiAdobephotoshop />,
  "Adobe Illustrator": <SiAdobeillustrator />,
  Git: (
    <Image
      src="/git.svg"
      alt="Git logo"
      width={24}
      height={24}
      style={{  filter: "invert(100%)",color: "#ffff" }}
    />
  ),
  GitHub: <FaGithub />,
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const controls = useAnimation();
  const [isActive, setIsActive] = useState(false);

  const handleInteractionStart = () => {
    setIsActive(true);
    controls.start("visible");
  };

  const handleInteractionEnd = () => {
    setIsActive(false);
    controls.start("hidden");
  };

  return (
    <motion.div
      className="group relative w-20 h-20 rounded-lg shadow-md bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center mx-2 mb-2 cursor-pointer"
      onHoverStart={handleInteractionStart}
      onHoverEnd={handleInteractionEnd}
      onTapStart={handleInteractionStart}
      onTapCancel={handleInteractionEnd}
    >
      <div className="text-2xl text-white">
        {skillIcons[skill]}
      </div>
      <motion.span
        className="absolute text-gray-500 text-xs bottom-0 w-full text-center font-bold py-1 bg-black bg-opacity-80 rounded-b-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 10 },
        }}
        transition={{ duration: 0.2 }}
      >
        {skill}
      </motion.span>
    </motion.div>
  );
};

interface SkillCategories {
  [key: string]: string[];
}

const skillCategories: SkillCategories = {
  "Programming Languages": ["C", "Java"],
  "Database Management": ["SQL", "MongoDB"],
  "Frontend Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Next.js",
  ],
  "Backend Technologies": ["Express.js", "Node.js"],
  "Cloud Computing": ["AWS"],
  "Design Tools": [
    "Figma",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ],
  "Other Tools": ["Git", "GitHub"],
};

const Skills: React.FC = () => {
  return (
    <div className="mt-12 ml-10 mr-8 font-mono tracking-widest">
      <h1 className="text-sky-300 text-2xl md:text-3xl mb-8">Skills</h1>
      <div className="space-y-8">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index}>
            <h2 className="text-gray-400 text-sm mb-4">{category}</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skillIndex}
                  skill={skill}
                  className="w-20 h-20 p-2 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center text-center"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
