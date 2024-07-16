import React, { ReactNode } from "react";

const AboutHeader = () => (
  <h1 className="text-sky-300 text-2xl md:text-3xl mb-4">About Me</h1>
);


interface AboutProps {
  className?: string;
}

interface AboutParagraphProps {
  children: ReactNode;

}

const AboutParagraph = ({ children }: AboutParagraphProps) => (
  <p className="text-gray-400 text-sm mt-4">{children}</p>
);

const AboutSkills = () => (
  <ul className="list-disc list-inside text-gray-400 text-sm mt-4">
    <li key="frontend">Creating intuitive interfaces with React and Next.js</li>
    <li key="design">Bringing designs to life with Figma and Illustrator</li>
    {/* <li key="cloud">Exploring the cloud with AWS</li> */}
    <li key="backend">Building backend solutions with Express and Node.js</li>
  </ul>
);

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className="mt-2 font-mono tracking-widest ml-10 mr-8">
      <AboutHeader />
      <AboutParagraph>
        Hello, I am Anurag Gaddamwar, a final-year Computer Science and Design student passionate about merging technology with creativity. I enjoy crafting captivating digital experiences through code.
      </AboutParagraph>
      <AboutParagraph>
        I am a lifelong learner with a curious mind, constantly exploring new frontiers. My journey includes:
      </AboutParagraph>
      <AboutSkills />
      <AboutParagraph>
        Aspiring to kickstart my career as a front-end developer, I aim to evolve into a full-stack expert. My goal is to create digital solutions that seamlessly blend functionality and aesthetics.
      </AboutParagraph>
    </div>
  );
};

export default About;
