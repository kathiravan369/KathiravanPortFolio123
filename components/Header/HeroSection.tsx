import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import SplitText from "../SplitText/SplitText"
interface HeroSectionProps {
  dark?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ dark = false }) => {
  const textVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const containerClass = classNames(
    "h-screen flex items-center justify-center text-center p-4",
    {
      "bg-dark text-light": dark, // Dark mode styles
      "bg-light text-dark": !dark, // Light mode styles
    }
  );

  const lines = [
    "I'm a dedicated Full-Stack Developer who thrives on turning ideas into functional and impactful web applications. With a passion for coding and problem-solving, I see web development as an ever-evolving journey where I push boundaries, learn new skills, and deliver innovative solutions."
  ];

  const lineStyles: React.CSSProperties = {

    lineHeight: "3rem",
    fontWeight: "bolder",
    textAlign: "center",
    width: "100%", // Full width for centering
    display: "block", // Ensure each line is block-level
  };

  return (
    <section className={containerClass}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-2"
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            style={{
              ...lineStyles,
              maxWidth: `${98 - index * 2}%`, // Tapering effect for width
            }}
            className={classNames(
              "break-words font-bold text-center leading-snug",
              {
                "text-2xl lg:text-3xl md:text-2xl sm:text-xl": true, // Responsive font sizes
              }
            )}
          >
            {line.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                className="inline-block"
              >
               <SplitText text={letter} /> 
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
