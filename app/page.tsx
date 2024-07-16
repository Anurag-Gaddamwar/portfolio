'use client';
import React, { useRef, useEffect, useState } from "react";
import { TracingBeam } from "./components/ui/tracing-beam"; 
import { AuroraBackground } from "./components/ui/aurora-background";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import About from "./components/about-me";
import Skills from "./components/skills";
import { BentoGrid, BentoGridItem } from "./components/ui/project-grid";
import Footer from "./components/Footer";
export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutHeight, setAboutHeight] = useState<number>(0);

  useEffect(() => {
    if (aboutRef.current) {
      const height = aboutRef.current.offsetHeight;
      setAboutHeight(height);
    }
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center relative">
<div className="rounded-xl w-full sm:text-5xl tracking-widest font-mono text-4xl sm:h-32 z-10 items-center justify-center relative">
  <AuroraBackground>
    ANURAG GADDAMWAR
    {typeof window !== 'undefined' && (
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        src="/AnuragPhoto.png" 
        alt="Anurag Gaddamwar" 
        className="block sm:hidden h-32 max-w-full object-cover absolute top-[5.19rem] transform -translate-y-1/2 right-4" 
        style={{ display: window.innerWidth <= 400 ? 'block' : 'none' }}
      />
    )}
  </AuroraBackground>
</div>

      <TextRevealCard text="Web Developer" revealText="Web Designer" />
      <div className="mt-8">
        <TracingBeam {...{ svgHeight: aboutHeight }}>
          <About />
          <Skills />
          <h1 className="text-sky-300 font-mono tracking-widest mt-10 text-2xl md:text-3xl mx-10 mb-10">Projects</h1>
          <BentoGrid>
            <BentoGridItem 
              title="PORTFOLIO" 
              description="My Portfolio Website" 
              detailedDescription={
                <>
                  <p className="text-sm text-justify">
                  </p>
                </>
              }
              icon={<i className="fas fa-video"></i>}
              image="portfolio.png"
              carouselItems={[ 
                { image: "p1.png", caption: "" }
              ]}
            />
            <BentoGridItem 
              title="CYPHER AI" 
              description="AI-Powered Interview and Resume Preparation Platform" 
              detailedDescription={
                <>
                  <p className="text-sm text-justify">
                  Cypher AI is a platform where job seekers can enhance their interview preparation and resume quality by receiving personalized feedback and guidance. The platform integrates the Gemini API to implement an interactive chatbot that provides responses and guidance for technical and interpersonal interview questions. Additionally, Cypher AI includes a resume analysis feature that accepts job roles and resumes in PDF or image format. This feature extracts text from uploaded documents and evaluates resumes against specific job roles, offering detailed feedback such as ATS compatibility scores, structure analysis, and content relevance scores.
                  <br/><br/>As a result, Cypher AI empowers job seekers with tailored interview practice and resume enhancement suggestions, significantly increasing their chances of success in the job application process. 
                  <br/><br/><span className="font-semibold">Tech Stack:</span> Next.js, React.js, react-markdown, WebKitSpeech API, OCR, Express.js, Node.js, MongoDB, Gemini API.
                  </p>
                </>
              }
              icon={<i className="fas fa-robot"></i>}
              image="cypher.png"
              carouselItems={[ 
                { image: "c1.png", caption: "Interview Assistant" },
                { image: "c2.png", caption: "Resume Analyzer" },
                { image: "c3.png", caption: "Resume Analysis Report" },
                { image: "c4.png", caption: "Resume Analysis Report" },
              ]}
            />
            <BentoGridItem 
              title="EVOLVE" 
              description="YouTube Optimizer" 
              detailedDescription={
                <>
                  <p className="text-sm text-justify">
                  Evolve is a platform where content creators can streamline their content creation process by summarizing audience feedback from YouTube comments & receiving recommendations that would help them take data-driven decision.<br/><br/> The platform integrates the Gemini API and YouTube Data API to collect and evaluate the comments, highlighting key insights and understanding audience perceptions. Evolve includes features to identify and filter out spam and abusive comments, ensuring that creators receive only the most relevant and constructive feedback.
                  <br/><br/>As a result, the platform enables creators to understand audience preferences, identify areas for improvement, receive content recommendations, and maintain a positive comment section. This ultimately enhances content quality and viewer engagement.<br/><br/><span className="font-semibold"> Tech Stack:</span> Next.js, MongoDB, Express.js, Node.js, React.js, Gemini API, and YouTube Data API.
                  </p>
                </>
              }
              icon={<i className="fas fa-video"></i>}
              image="evolve.png"
              carouselItems={[ 
                { image: "e7.png", caption: "Home Page" },
                { image: "e6.png", caption: "Home Page" },
                { image: "e5.png", caption: "YouTube Video Comment Analyzer" },
                { image: "e4.png", caption: "Analysis Report" },
                { image: "e3.png", caption: "Analysis Report" },
                { image: "e2.png", caption: "Chatbot" },
                { image: "e1.png", caption: "Profile page" },
              ]}
            />
          </BentoGrid>
        </TracingBeam>
        

      </div>
      <Footer />
    </main>
  );
}
