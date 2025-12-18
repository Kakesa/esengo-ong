import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(60px)";
      case "down":
        return "translateY(-60px)";
      case "left":
        return "translateX(60px)";
      case "right":
        return "translateX(-60px)";
      case "scale":
        return "scale(0.8)";
      case "fade":
      default:
        return "translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0) scale(1)" : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
