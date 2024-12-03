import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}
export default function SectionLayoutAbout({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { display: "none", translateY: 100 },
        {
          display: "flex",
          translateY: 0, 
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="fixed  h-screen w-full bg-blue transition-colors duration-500 ease-in-out dark:bg-black" />

      {/* Content Wrapper */}
      <div
        className={classNames(
          "flex h-full w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-auto",
          className
        )}
      >
        {/* Header */}
        <Header />

        {/* Scrollable Content */}
        <div
          ref={ref}
          className="w-full flex-1 flex flex-col items-center overflow-y-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
