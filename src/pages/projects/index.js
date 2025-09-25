import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import {
  projectGrid,
  projectCard,
  projectImage,
  projectTitle,
  projectDate,
  projectExcerpt,
} from './projects.module.css'

const ProjectsPage = ({data}) => {
  return (
    <Layout pageTitle="projects">
      <div className={projectGrid}>
        {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                  <Link 
                    to={`/projects/${node.frontmatter.slug}`}
                    className={projectCard}
                    >
                    <h2 className={projectTitle}>{node.frontmatter.title}</h2>
                    <p className={projectDate}>{node.frontmatter.date}</p>
                    <p className={projectExcerpt}>{node.excerpt}</p>
                  </Link>
              </article>
            ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Projects" />

export default ProjectsPage