import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const ProjectsPage = ({data}) => {
  return (
    <Layout pageTitle="My Projects">
        <ul>
        {
            data.allFile.nodes.map(node => (
            <li key={node.name}>
                {node.name}
            </li>
            ))
        }
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Projects" />

export default ProjectsPage