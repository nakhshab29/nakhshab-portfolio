import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

/**
 * Wraps children in a Framer Motion div with a reveal-on-scroll animation.
 * The `style` prop (including `gridColumn`) is applied to the outermost wrapper
 * so CSS Grid layout works correctly.
 */
export function RevealCard({ children, className = "", delay = 0, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
