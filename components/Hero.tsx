import { home } from "./Float/config";
import Float from "./Float/Float";
import HeroSection from "./Header/HeroSection";
import HeroSectionOne from "./Header/HeroSectionone";
import HeroSectionTwo from "./Header/HeroSectionTwo";
import { SectionLayout } from "./Layout";
import SectionLayoutTwo from "./Layout/SectionLayoutTwo";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading} from "./Typography";
import HeadingTwo from "./Typography/HeadingTwo";
export default function Home() {
  return (
    
    <div>
      
       <SectionLayout className="overflow-hidden">
    <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
      <SubHeading dark>
        <span className="font-bold">Hey! </span>My name is
      </SubHeading>

      <Heading dark className="text-center font-extrabold">
        <SplitText text="Kathiravan" />
        <SplitText text="Selvaraj" />
      </Heading>
      
      <HeadingTwo dark className="text-center font-extrabold">
        <SplitText text="Welcome to my Corner of Curiosities " />
        <SplitText text=" of the internet!" />
      </HeadingTwo>
      
    </div>
    <Float config={home} />
  </SectionLayout>


 


  <SectionLayoutTwo dark  >
    <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11"
   
    >
      
  
  <Heading dark className="text-center font-extrabold">
  <HeroSection />
      </Heading>
 
      
    </div>
    <Float config={home} />
  </SectionLayoutTwo>

  <SectionLayoutTwo dark  >
    <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11"
   
    >
      
  
  <Heading dark className="text-center font-extrabold">
  <HeroSectionOne />
      </Heading>
 
      
    </div>
    <Float config={home} />
  </SectionLayoutTwo>
  <SectionLayoutTwo dark  >
    <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11"
   
    >
      
  
  <Heading dark className="text-center font-extrabold">
  <HeroSectionTwo />
      </Heading>
 
      
    </div>
    <Float config={home} />
  </SectionLayoutTwo>
  
  </div>

  );
}
