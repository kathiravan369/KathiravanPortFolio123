import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";
import SplitText from "../SplitText/SplitText";
import SectionLayoutAbout from "../Layout/SectionLayoutAbout";
export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <SectionLayoutAbout >
        <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          {/* Subheading */}
          <SubHeading dark align={Align.Left}>
            About
          </SubHeading>

          {/* Heading */}
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text=" A passionate Full-Stack Developer committed to building impactful web applications" />
          </Heading>

          {/* Content */}
          <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
            <p className="w-full whitespace-pre-line md:w-1/2">
              Hello! I am a passionate Full-Stack Developer with a strong
              foundation in HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, and MongoDB. With a love for problem-solving and
              continuous learning, I thrive on creating dynamic, user-centric
              web applications that make a real-world impact.
            </p>
            <p className="w-full whitespace-pre-line md:w-1/2">
              Over the years, I have honed my skills through both academic
              achievements and practical experience. I started my journey by
              mastering the essential web technologies and diving deeper into
              modern frameworks. Through my internships and freelance work, I have
              developed a keen understanding of both front-end and back-end
              development, which has enabled me to build full-stack solutions
              that are not only efficient but also scalable.
            </p>
          </div>
          <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
            <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
              <SubHeading dark align={Align.Left}>
                <SplitText text="My Journey" />
              </SubHeading>

              <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
                <p className="w-full whitespace-pre-line md:w-1/2">
                  During my 1-year internship at Imagescon India, I gained
                  hands-on experience working on live projects, developing both
                  the front-end and back-end of applications. I refined my
                  skills in building responsive and intuitive user interfaces
                  using React.js and Bootstrap while simultaneously gaining
                  expertise in Node.js and MongoDB on the back-end.
                  <br/>   <br/>   <br/>
                  <p >
                    In addition to my internships, I have also worked on various
                    full-stack projects, applying the MERN stack (MongoDB,
                    Express.js, React.js, Node.js) to create end-to-end
                    applications. Whether it is designing the user interface or
                    building the back-end functionality, I take pride in
                    delivering complete solutions that exceed expectations.
                  </p>
                </p>
                <p className="w-full whitespace-pre-line md:w-1/2">
                  My 3-month internship at Root IT provided me with the
                  opportunity to collaborate in a fast-paced environment, where
                  I contributed to multiple projects, learning best practices
                  and refining my problem-solving skills. It was here that I
                  truly understood the importance of writing clean, maintainable
                  code and working effectively in a team to deliver high-quality
                  web applications.
                </p>
              </div>
            </div>
          </div>
          {/* Educational Background */}
          <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
            <SubHeading dark align={Align.Left}>
              <SplitText text="Educational Background" />
            </SubHeading>

            <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
              <p className="w-full whitespace-pre-line md:w-1/2">
                I completed my Bachelor’s degree in Computer Science from
                Mahendra Arts and Science College (Autonomous), Namakkal, where
                I achieved a 70% mark and graduated in 2022.
              </p>
              <p className="w-full whitespace-pre-line md:w-1/2">
                I also have a solid academic foundation from SKT Matric Higher
                Secondary School and 10th Grade, where I scored 72% and 90%,
                respectively.
              </p>
            </div>
          </div>
           {/* Why Web Development */}
        <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          <SubHeading dark align={Align.Left}>
          <SplitText text="Why Web Development?" />  
          </SubHeading>
          <p className="leading-relaxed">
            Web development is my playground—a space where I combine creativity,
            logic, and technology to solve problems and create value. I enjoy the
            challenge of turning complex ideas into seamless digital solutions.
            The ever-evolving nature of web technologies excites me, and I’m
            always eager to learn, grow, and stay ahead of the curve.
          </p>
        </div>

        {/* What I Bring to the Table */}
        <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          <SubHeading dark align={Align.Left}>
          <SplitText text="What I Bring to the Table" />   
          </SubHeading>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>
              <strong>Front-End Expertise:</strong> Crafting pixel-perfect designs
              with HTML, CSS, JavaScript, and React.js.
            </li>
            <li>
              <strong>Back-End Proficiency:</strong> Building scalable, secure, and
              efficient applications with Node.js, Express.js, and MongoDB.
            </li>
            <li>
              <strong>Collaborative Spirit:</strong> Excels in team environments
              and understands the importance of communication and adaptability.
            </li>
            <li>
              <strong>Problem-Solving Mindset:</strong> Approaches challenges with
              a logical and creative perspective.
            </li>
            <li>
              <strong>Passion for Growth:</strong> A constant learner, excited to
              explore the latest tools and technologies.
            </li>
          </ul>
        </div>

        {/* My Philosophy */}
        <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          <SubHeading dark align={Align.Left}>
          <SplitText text="My Philosophy" /> 
          </SubHeading>
          <p className="leading-relaxed">
            I believe that great web applications are built at the intersection of
            creativity, technology, and empathy. Every line of code is an
            opportunity to improve user experiences and make an impact. If you’re
            looking for someone who’s passionate, committed, and ready to take on
            challenges, let’s connect and create something extraordinary together!
          </p>
        </div>

        </div>
        <Float config={about} />
      </SectionLayoutAbout>
      

    </div>
  );
}
