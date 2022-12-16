"use client";
import { motion } from "framer-motion";
import { startTransition, useState } from "react";
import { InsightCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    ></motion.div>
  </section>
);

export default Insights;
