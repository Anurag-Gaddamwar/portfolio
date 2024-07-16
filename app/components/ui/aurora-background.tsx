// D:\PROJECTS\Portfolio\portfolio\app\components\ui\aurora-background.tsx
import { cn } from "@/app/utils/cn";
import React, { ReactNode } from "react";
import { HTMLMotionProps, motion } from 'framer-motion'; // Import framer-motion

// Updated interface to extend HTMLMotionProps for 'div' element
interface AuroraBackgroundProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    showRadialGradient?: boolean;
  }
  
  
  export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props // Pass all other props directly to motion.div
  }: AuroraBackgroundProps) => {
    return (
      <motion.div style={{zIndex:10}} // Wrap the div in a motion.div 
        className={cn(
          "relative flex flex-col rounded h-[18vh] items-center justify-center dark:bg-zinc-800 text-slate-400 transition-bg",
          className
        )}
        {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div // Add this line here
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
          initial={{ backgroundPosition: "50% 50%, 50% 50%" }} // Start position of the background gradient.
          animate={{ backgroundPosition: ["350% 50%, 350% 50%", "50% 50%, 50% 50%"] }} // Transition of the background.
          transition={{ duration: 60, ease: "linear", repeat: Infinity, repeatType: 'reverse', times: [0, 0.5] }}
        ></motion.div>
      </div>
      {children}
    </motion.div> 
  );
};
