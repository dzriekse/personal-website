import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './about.module.css'

const AboutPage = () => {
    return (
      
      <Layout pageTitle="about">
        <div className={styles.flexContainer}>
          <div className={styles.column}>
            <StaticImage
              alt="A headshot of Zumi Riekse"
              src="../images/zumi_profile.jpg"
              className={styles.profileImage}
            />
            <div className={styles.resumeContainer}>
              {/* Resume button under the picture */}
              <a
                href="/Zumi_Riekse_Resume.pdf"   // place your PDF inside /static/
                target="https://drive.google.com/file/d/13rsEYoBhcdQo40sWxSHiDA-8T4mB7pRJ/view?usp=sharing"
                rel="noopener noreferrer"
                className={styles.resumeButton}
              >
                Resume
              </a>
          </div>
          </div>
          <div className={styles.column}>
            <p className={styles.bioText}>
              My name is Zumi Riekse and am a Peruvian American aspiring physicist and engineer. I currently attend the University of Chicago, pursuing a double major in physics (B.S) and 
              computer science (B.S.). I grew up in Northern Virginia, where I graduated from Thomas Jefferson High School for Science and Technology. Since then, I've been continuing to
              pursue my love for physics and integrating it with the applicability of computer science to answer the questions I ask about the world. <br /> 
              <br />
              This previous summer, I worked as an intern at Argonne Research Laboratory as part of the SULI program for a ten week internship. I designed Ge-Au shunt resistors for 
              use in the transition edge sensors we have at the Advanced Photon Source as part of the Detector's Group. After the program's completion, I was offered an extension and 
              continued to work in the lab until school started in the fall. <br />
              <br />
              During my short career, I've also nurtured a love for aerospace. For two summers, I worked in the RF engineering sector of the U.S. Naval Research Laboratory's spacecraft 
              engineering division on a student-led CubeSat project in the K-band. Entering college, I continued to pursue satellite engineering as part of the UChicago Space Program, 
              where I serve as avionics hardware lead for the mission. <br />
              <br />
              In my free time, I play lots and lots of volleyball and read whenever I get the chance. I'm interested in anything and everything, feel free to reach out to chat!

            </p>
          </div>
        </div>
        </Layout>
       
    )
  }


  export const Head = () => <Seo title="About Me" />
  export default AboutPage