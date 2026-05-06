"use client";
import { useRef } from "react";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export function AvatarBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  
  const y = useTransform(scrollY, [0, 500], [0, 25]);
  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div ref={containerRef} className="
      flex items-center justify-center
      rounded-2xl md:rounded-3xl
      bg-linear-to-r from-[#3F3F40] to-[#303030]
      w-20 h-20
      shrink-0
      lg:w-36 lg:h-36
    ">
      <motion.div 
        className="w-32 h-32 relative"
        style={{ y: smoothY }}
      >
        <Image
          src="/mohit-avatar.png"
          alt="avatar"
          fill 
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}