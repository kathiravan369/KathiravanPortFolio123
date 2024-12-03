import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import SplitText from "../SplitText/SplitText";

interface HeroSectionProps {
  dark?: boolean;
}

const HeroSectionTwo: React.FC<HeroSectionProps> = ({ dark = false }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures animations only run on the client.
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerClass = classNames(
    "min-h-screen flex flex-col items-center justify-center px-6",
    {
      "bg-gray-900 text-white": dark,
      " text-gray-800": !dark,
    }
  );

  const buttonClass = classNames(
    "px-6 py-2 rounded-full font-semibold text-sm tracking-wide shadow-lg",
    {
      "bg-blue-500 text-orange hover:bg-blue-600": !dark,
      "bg-yellow-500 text-black hover:bg-yellow-600": dark,
    }
  );

  return (
    <div className={containerClass}>
      {isClient && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading Section */}
          <motion.div
            className="space-y-4 text-center"
            variants={fadeUpVariants}
          >
             <h1 className="text-4xl font-bold">
              <SplitText text="Project Me" />
            </h1>
            <h3 className="text-5xl font-extrabold leading-tight">
              <SplitText text="Welcome to My World" />
            </h3>
            <p className="text-lg font-medium">
              <SplitText text="Crafting impactful solutions through code and design." />
            </p>
          </motion.div>

          {/* Feature Section */}
          <motion.div
            className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
            variants={fadeUpVariants}
          >
              <Link href="/projects" className={buttonClass}>
              <motion.div
              className={classNames("space-y-4 rounded-lg p-6 shadow-md", {
                "bg-black text-white": dark, // Dark mode styles
                "bg-white text-black": !dark, // Light mode styles
              })}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold">Dynamic E-Commerce</h2>
              <p className="text-sm">
                Building responsive, user-friendly platforms with seamless
                shopping experiences.
              </p>
            </motion.div>
              </Link>
            
              <Link href="/projects" className={buttonClass}>
              <motion.div
              className="to-teal-500 space-y-4 rounded-lg bg-gradient-to-r from-green-500 p-6 text-white shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold">Creative Design</h2>
              <p className="text-sm">
                Transforming ideas into visually stunning, functional web
                designs.
              </p>
            </motion.div>
              </Link>
           
          </motion.div>

          {/* Call to Action */}
          <motion.div className="mt-12" variants={fadeUpVariants}>
            <Link href="/projects" className={buttonClass}>
              <SplitText text="Discover More About Me" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSectionTwo;
