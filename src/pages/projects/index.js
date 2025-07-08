import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'

const ProjectsPage = ({data}) => {
  return (
    <Layout pageTitle="My Projects">
        {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>
                  <Link to={`/projects/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            ))
        }
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

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage