"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <p>
            Actually I am Gay and i am looking for a sugar daddy.I am willing to
            do any thing for that. #LGBTQ
          </p>{" "}
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          My name is <span>Varun Gupta</span> and i am a professional ui ux
          developer. I can create a fantastic ui for your website
        </p>{" "}
      </div>
    </main>
  );
}
