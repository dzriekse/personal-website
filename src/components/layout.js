import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteTitleLink,
  header
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const location = useLocation()
  const cleanPath =  location.pathname.replace(/\/$/, '') 
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)  
  return (
    <div className={container}>
      <header className={header}>
        <h1 className={siteTitle}>
          <Link to="/" className={siteTitleLink}>
            {data.site.siteMetadata.title}{cleanPath}
          </Link>
        </h1>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout