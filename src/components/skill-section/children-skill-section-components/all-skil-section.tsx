"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiDjango, SiRuby, SiJenkins } from "react-icons/si";

// Define a type for each individual skill
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

// Define the type for the skills object (category -> array of skills)
interface Skills {
  "Front-End Skills": Skill[];
  "Back-End Skills": Skill[];
  "DevOps & Tools": Skill[];
}

// Define the skills object with proper typing
const skills: Skills = {
  "Front-End Skills": [
    { name: "HTML", icon: <FaHtml5 />, level: 100 },
    { name: "CSS", icon: <FaCss3Alt />, level: 70 },
    { name: "JavaScript", icon: <FaJs />, level: 70 },
    { name: "React", icon: <FaReact />, level: 70 },
  ],
  "Back-End Skills": [
    { name: "Node.Js", icon: <FaNodeJs />, level: 30 },
    { name: "Express.Js", icon: <SiExpress />, level: 10 },
  ],
  "DevOps & Tools": [{ name: "Git", icon: <FaGitAlt />, level: 60 }],
};

interface SkillBarProps {
  name: string;
  icon: React.ReactNode;
  level: number;
}

export default function AllSkillSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8 w-[90%] mt-20 text-center">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-4 text-center ">
            {category}
          </h2>
          <div className="bg-[#191717] pt-5 pb-5 px-5 rounded-2xl">
            {skillList.map(({ name, icon, level }: Skill) => (
              <SkillBar key={name} name={name} icon={icon} level={level} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillBar({ name, icon, level }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (isInView) {
      setWidth(`${level}%`);
    }
  }, [isInView, level]);

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="text-xl">{icon}</div>
        <span>{name}</span>
      </div>
      <div ref={ref} className="w-full h-6 bg-[black] rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 1.2 }}
          className="h-6 bg-[#5f5151] rounded text-center text-sm flex items-center justify-center"
        >
          {level}%
        </motion.div>
      </div>
    </div>
  );
}
