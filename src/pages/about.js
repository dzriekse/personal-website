import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
      
      <Layout pageTitle="about">
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
          <StaticImage
            alt="A headshot of Zumi Riekse"
            src="../images/zumi_profile.jpg"
          />
        </Layout>
    )
  }


  export const Head = () => <Seo title="about" />
  export default AboutPage