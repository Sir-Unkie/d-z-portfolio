import React from 'react';
import styles from './AboutMePage.module.scss';
import AboutMeButton from '../../Components/AboutMeButton/AboutMeButton';
import TechStackContent from '../../Components/TechStackContent/TechStackContent';
import ExperienceContent from '../../Components/ExperienceContent/ExperienceContent';
import EducationContent from '../../Components/EducationContent/EducationContent';
import MyHeading from '../../Components/MyHeading/MyHeading';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultSlide } from '../../FramerMotion/framerMotion.pages.configs';
import myImage from '../../Assets/img/AboutMePageImages/compressedPng/About 2000px-min.png';

const AboutMePage = () => {
  const initialState = JSON.parse(localStorage.getItem('aboutMeOption')) || {
    tech: true,
    exp: false,
    education: false,
  };
  const [visibleOption, setVisibleOption] = useState(initialState);
  const selectOption = option => {
    const optionObject = {
      tech: false,
      exp: false,
      education: false,
      [option]: true,
    };
    localStorage.setItem('aboutMeOption', JSON.stringify(optionObject));
    setVisibleOption(optionObject);
  };

  return (
    <motion.div
      variants={defaultSlide}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={styles.bg}
    >
      <img src={myImage} alt='Me' className={styles.myImage} />
      <div className={styles.optionsContainer}>
        <div className={styles.techStack}>
          <AboutMeButton
            option={'tech'}
            clickHandler={selectOption}
            selected={visibleOption.tech}
          >
            My Tech Stack
          </AboutMeButton>
        </div>
        <div className={styles.experience}>
          <AboutMeButton
            clickHandler={selectOption}
            option={'exp'}
            selected={visibleOption.exp}
          >
            My Experience
          </AboutMeButton>
        </div>
        <div className={styles.Education}>
          <AboutMeButton
            clickHandler={selectOption}
            option={'education'}
            selected={visibleOption.education}
          >
            My Education
          </AboutMeButton>
        </div>
      </div>

      <div className={styles.aboutMe}>
        <MyHeading>About me</MyHeading>
        <div className={styles.textArea}>
          <AnimatePresence exitBeforeEnter>
            {/* <TechStackContent></TechStackContent> */}
            {visibleOption.tech === true ? (
              <TechStackContent key='1'></TechStackContent>
            ) : null}
            {visibleOption.exp === true ? (
              <ExperienceContent key='2'></ExperienceContent>
            ) : null}
            {visibleOption.education === true ? (
              <EducationContent key='3'></EducationContent>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMePage;
