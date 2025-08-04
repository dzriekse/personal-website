import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './about.module.css'

const AboutPage = () => {
    return (
      
      <Layout pageTitle="about">
        <div className={styles.flexContainer}>
          <StaticImage
            alt="A headshot of Zumi Riekse"
            src="../images/zumi_profile.jpg"
            className={styles.profileImage}
          />
          <p className={styles.bioText}>
            Hi there! I'm the proud creator of this site, which I built with Gatsby.
            I like physics, code, circuits, and cats.
        </p>
        </div>
        </Layout>
       
    )
  }


  export const Head = () => <Seo title="about" />
  export default AboutPage