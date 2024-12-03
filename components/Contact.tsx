import { SiLinkedin } from "react-icons/si";
import { Badge } from "./Badge";
import { Clipboard } from "./Clipboard";
import { contact } from "./Float/config";
import Float from "./Float/Float";
import { openInNewTab } from "./helper";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import SectionLayoutThree from "./Layout/SectionLayoutThree";

export default function Contact() {
  return (
    <SectionLayoutThree className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-start space-y-8 md:pb-0">
        <SubHeading dark align={Align.Left}>
          Contact
        </SubHeading>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Let’s keep in touch." />
          </Heading>

          <p>
            If you have an exciting opportunity for me, or if you just simply
            want to say hello, feel free to reach out!
          </p>
        </div>

        <Clipboard text="marie.bawanan@gmail.com">
          <Heading dark size="xs">
            skeerthikeerthi872002@gmail.com
          </Heading>
        </Clipboard>

        <div>
          Alternatively, you can also send me a message on
          <Badge
            icon={<SiLinkedin />}
            onClick={() => openInNewTab("https://www.linkedin.com/in/kathiravan-selvaraj-324468275/")}
            className="ml-1"
          >
            Linkedin
          </Badge>
        </div>

        <p className="whitespace-pre-line text-sm font-bold">
          {`This site is still in the works, check back often. `}
          &#9786;
        </p>
      </div>
      <Float config={contact} />
    </SectionLayoutThree>
  );
}
