import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SectionLayoutAbout from "./Layout/SectionLayoutAbout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import Image from "next/image";
import image2 from "../public/image (2).png";
import image4 from "../public/image (4).png";
import image3 from "../public/image (3).png";
import Shopping from "../public/shopping.png";
import { motion } from "framer-motion";
import SectionLayoutFouth from "./Layout/SectionLayoutFouth";
export default function Writing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <SectionLayoutFouth>
        <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          {/* Subheading */}

          <SubHeading dark align={Align.Left}>
            <SplitText text="Projects" />
          </SubHeading>

          {/* Heading */}
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="My Work Portfolio" />
          </Heading>

          {/* Projects Description */}
          <div className="flex flex-col space-y-10 leading-relaxed md:space-y-16">
            {/* Project 1 */}
            <div>
              <SubHeading dark align={Align.Left}>
                <SplitText text="Shopping Website with Add to Cart Functionality" />
              </SubHeading>{" "}
              <br />
              <p className="w-full whitespace-pre-line">
                This is a dynamic e-commerce platform crafted using HTML, CSS,
                JavaScript, and the Bootstrap framework. The website features a
                variety of products such as phones, airpods, and televisions,
                each with detailed descriptions and pricing. It offers an
                intuitive Add to Cart functionality, ensuring a smooth shopping
                experience by allowing users to add multiple items to their cart
                and view them conveniently. The responsive interface, designed
                with Bootstrap, guarantees compatibility and optimal performance
                across devices. Additionally, the shopping flow has been
                optimized by categorizing products and streamlining the checkout
                process for a seamless user experience.
              </p>
              <br />
              {/* Image with Hover Effect */}
              <div
                style={{
                  width: "350px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
              >
                <a
                  href="https://kathiravan369.github.io/shoppingwebside/project1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                >
                  <Image
                    src={Shopping}
                    style={{ width: "350px" }}
                    alt="Project Image"
                    className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div>
              <SubHeading dark align={Align.Left}>
                <SplitText text="Thai Food Webpage Replica  " />
              </SubHeading>{" "}
              <br />
              <p className="w-full whitespace-pre-line">
                This project is a modern, responsive webpage inspired by a Thai
                food website, developed using React.js, HTML, CSS, JavaScript,
                and Bootstrap. The design emphasizes showcasing diverse food
                items like curries, noodles, and desserts. A menu card feature
                has been implemented, complete with dynamic links that allow
                users to easily explore and add new items. React.js was utilized
                for its efficient component-based development approach and
                smooth state management. The flexibility of Bootstrap ensured
                that the design remained mobile-friendly, offering a consistent
                experience across different devices.
              </p>
              <br />
              <div
                style={{
                  width: "350px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
              >
                <a
                  href="https://reactproject-green.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                >
                  <Image
                    src={image2}
                    style={{ width: "350px" }}
                    alt="Project Image"
                    className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div>
              <SubHeading dark align={Align.Left}>
                <SplitText text="Notes Application (CRUD)" />
              </SubHeading>{" "}
              <br />
              <p className="w-full whitespace-pre-line">
                This is a full-stack notes application designed to offer
                complete CRUD functionality. The frontend, built using React.js,
                features login and signup pages to ensure secure user
                authentication. The backend, implemented with Node.js, Express,
                and Mongoose, allows users to store, retrieve, update, and
                delete their notes effectively. Navigation between pages is
                seamless thanks to react-router-dom, and smooth API
                communication is achieved using axios. The user-friendly
                interface simplifies organizing and managing notes, making this
                application both practical and efficient.
              </p>
              <br />
            </div>

            
            {/* Project 5 */}
            <div className="mb-16">
              <SubHeading dark align={Align.Left}>
                <SplitText text="Raj Sundari Infrastructure Project" />
              </SubHeading>
              <br />
              <p className="w-full whitespace-pre-line leading-relaxed">
                The Raj Sundari Infrastructure project is a professional website
                for a leading infrastructure and real estate company. It serves
                as a digital portfolio showcasing the company’s services,
                achievements, and projects.
              </p>
              <div>
                <ul className="ml-5 mt-4 list-disc space-y-2 ">
                  <li>
                    <strong>Elegant Design:</strong> Modern and visually
                    appealing, reflecting the brand’s professionalism.
                  </li>
                  <li>
                    <strong>Comprehensive Information:</strong> Detailed
                    sections for services, projects, and company background.
                  </li>
                  <li>
                    <strong>Responsive Design:</strong> Optimized for all
                    devices, ensuring wide accessibility.
                  </li>
                  <li>
                    <strong>Interactive Elements:</strong> Engaging animations,
                    hover effects, and intuitive navigation.
                  </li>
                  <li>
                    <strong>SEO Optimization:</strong> Enhanced search engine
                    visibility with structured metadata and content.
                  </li>
                </ul>
              </div> <br />
              <p className="mt-4 w-full whitespace-pre-line">
                <strong>Technologies Used:</strong> React.js, Next.js,
                Material-UI, WordPress (or Node.js), and Google Analytics
                integration. The project was deployed on platforms like AWS or
                Vercel.
              </p>
              <p className="mt-4">
                The website effectively boosts the company’s online presence and
                engagement, providing potential clients with a seamless platform
                to explore services and make inquiries. My role involved
                designing and implementing UI components, optimizing the site
                for performance and SEO, and conducting usability testing.
              </p>
              {/* Project Link */} <br /> <br />
              <div
                style={{
                  width: "350px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
              >
                <a
                  href="https://rajsundariinfrastructure.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                >
                  <Image
                    src={image3}
                    style={{ width: "350px" }}
                    alt="Project Image"
                    className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
                </a>
              </div>
            </div>


            {/* Project 4 */}
            <div className="mb-16">
              <SubHeading dark align={Align.Left}>
                <SplitText text="DSMP L Unit 1 Project" />
              </SubHeading>
              <br />
              <p className="w-full whitespace-pre-line leading-relaxed">
                The DSMP L Unit 1 project is a comprehensive web application
                designed to manage and streamline operations for a specific
                industry or business domain. This platform focuses on enhancing
                productivity, transparency, and collaboration within the unit.
              </p>
              <ul className="ml-5 mt-4 list-disc space-y-2">
                <li>
                  <strong>Real-time Data Management:</strong> Efficient handling
                  of operational data with seamless updates.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Designed with
                  intuitive navigation for ease of use.
                </li>
                <li>
                  <strong>Custom Dashboards:</strong> Dynamic visualizations of
                  key metrics and data points.
                </li>
                <li>
                  <strong>Secure Authentication:</strong> Role-based access
                  controls to protect sensitive data.
                </li>
                <li>
                  <strong>Mobile Responsive Design:</strong> Usability across
                  devices for on-the-go accessibility.
                </li>
              </ul> <br />
              <p className="mt-4 w-full whitespace-pre-line">
                <strong>Technologies Used:</strong> React.js, Next.js,
                Material-UI, Node.js (or Django), MySQL (or MongoDB), and
                GitHub. The project was deployed on platforms like AWS or
                Vercel.
              </p>
              <p className="mt-4">
                The project successfully streamlined workflows, reduced
                inefficiencies, and provided actionable insights to
                stakeholders. My contributions included designing responsive UI
                components, integrating APIs, and conducting rigorous testing to
                ensure a seamless user experience.
              </p>
              {/* Project Link */} <br /> <br />
              <div
                style={{
                  width: "350px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
              >
                <a
                  href="https://dsmplunit1.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                >
                  <Image
                    src={image4}
                    style={{ width: "350px" }}
                    alt="Project Image"
                    className="h-auto w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-75 hover:grayscale"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
                </a>
              </div>
            </div>

          </div>
        </div>

        <Float config={projects} />
      </SectionLayoutFouth>
  
    </div>
  );
}
