import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { theme } from "@/styles/theme";

const ArrowLeft: React.FC = () => {
  const circleRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;

    if (circle && path && svg) {
      const circleLength = circle.getTotalLength();

      // Set initial strokeDasharray and strokeDashoffset for animation
      gsap.set(circle, {
        strokeDasharray: circleLength,
        strokeDashoffset: circleLength,
        stroke: theme.colors.orange,
      });

      const handleMouseEnter = () => {
        gsap.to(circle, {
          duration: 1,
          strokeDashoffset: 0,
          ease: "power2.out",
        });
        gsap.to(path, {
          duration: 1,
          fill: theme.colors.orange,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(circle, {
          duration: 0.4,
          strokeDashoffset: circleLength,
          ease: "power2.out",
        });
        gsap.to(path, {
          duration: 0.4,
          fill: "#525252",
          ease: "power2.out",
        });
      };

      svg.addEventListener("mouseenter", handleMouseEnter);
      svg.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        svg.removeEventListener("mouseenter", handleMouseEnter);
        svg.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <svg
      style={{ transform: "rotate(90deg)" }}
      ref={svgRef}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static black stroke */}
      <circle cx="20" cy="20" r="19.5" stroke="#525252" />
      <path
        ref={pathRef}
        d="M19.6851 28.1581C20.0756 28.5486 20.7088 28.5486 21.0993 28.1581L27.4633 21.7941C27.8538 21.4036 27.8538 20.7704 27.4633 20.3799C27.0728 19.9894 26.4396 19.9894 26.0491 20.3799L20.3922 26.0368L14.7354 20.3799C14.3448 19.9894 13.7117 19.9894 13.3211 20.3799C12.9306 20.7704 12.9306 21.4036 13.3211 21.7941L19.6851 28.1581ZM19.3922 14.9019L19.3922 27.451L21.3922 27.451L21.3922 14.9019L19.3922 14.9019Z"
        fill="#525252"
      />
      {/* Animated orange stroke */}
      <circle
        ref={circleRef}
        cx="20"
        cy="20"
        r="19.5"
        stroke={theme.colors.orange}
      />
    </svg>
  );
};

export default ArrowLeft;
