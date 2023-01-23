'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is the next step in the internet's evolution,
        a digital space where businesses can interact with customers in new ways,
        creating new revenue streams. It is a game-changer that can{' '}
        <span className="font-extrabold text-white">
          revolutionize
        </span>{' '}
        the way we live, work, and play. Using{' '}
        <span className="font-extrabold text-white">VR</span> technology you can
        easily explore the metaverse and turn your dreams into
        reality.{' '}
        <span className="font-extrabold text-white">Explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
