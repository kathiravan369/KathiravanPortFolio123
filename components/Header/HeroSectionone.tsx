import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import SplitText from "../SplitText/SplitText";

interface HeroSectionProps {
  dark?: boolean;
}

const HeroSectionOne: React.FC<HeroSectionProps> = ({ dark = false }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this is only executed on the client
    setIsClient(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerClass = classNames(
    " text-center p-4 rounded-lg shadow-lg",
    {
      "bg-dark text-light": dark,
      "bg-light text-dark": !dark,
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
          {/* Heading */}
          <motion.div
            variants={fadeUpVariants}
            className="text-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl font-bold">
              <SplitText text="About Me" />
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              <SplitText text="A passionate Full-Stack Developer committed to building impactful web applications." />
            </p>
          </motion.div>

          {/* Card Section */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-md shadow-md space-y-4"
            variants={fadeUpVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className="text-2xl font-semibold"
              variants={fadeUpVariants}
            >
              Hello!
            </motion.h2>
            <motion.p
              className="text-sm text-center"
              style={{ fontSize: "20px" }}
              variants={fadeUpVariants}
            >
              I specialize in creating dynamic, user-centric web applications
              using modern web technologies. With a solid foundation in both
              front-end and back-end development, I deliver solutions that make
              a difference.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-32xl  rounded-md transition duration-300"
              >
                <SplitText text="Go to About Page" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSectionOne;
