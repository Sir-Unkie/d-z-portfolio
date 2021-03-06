import React from 'react';
import styles from './ProjectsPage.module.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import MyHeading from '../../Components/MyHeading/MyHeading';
import ProjectsData from '../../Assets/Projects Data/ProjectsData.js';
import { defaultSlide } from '../../FramerMotion/framerMotion.pages.configs';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.main
      variants={defaultSlide}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={styles.projectsPage}
    >
      <MyHeading>My projects</MyHeading>
      <div className={styles.projectsContainer}>
        {ProjectsData.map((project, index) => {
          return (
            <ProjectCard
              key={project.projectName}
              technologyStack={project.technologyStack}
              mainFeatures={project.mainFeatures}
              projectName={project.projectName}
              imageLink={project.image}
              imageLinkWebP={project.imageWebP}
              websiteURL={project.website}
              githubURL={project.github}
              dark={index % 2 === 1 ? true : false}
            ></ProjectCard>
          );
        })}
      </div>
    </motion.main>
  );
};

export default ProjectsPage;
