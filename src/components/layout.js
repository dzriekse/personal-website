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
import TransitionLink from 'gatsby-plugin-transition-link'
import TypingText from './typingtext.js'
import { useEffect, useState, useRef } from 'react';


const Layout = ({ pageTitle, children }) => {

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);

  const location = useLocation()
  const pathname = typeof window !== 'undefined' && location?.pathname
    ? location.pathname
    : '';
  console.clear();
  console.log("this is the pathname")
  console.log(pathname)
  const cleanPath = pathname.replace(/\/$/, '') // location.pathname
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)  
  const full = `${data.site.siteMetadata.title}${cleanPath}`
  return (
    <div className={container}>
      <header className={header}>
        <h1 className={siteTitle}>
          <TransitionLink to="/" className={siteTitleLink}>
            {full ? (
              <TypingText key={cleanPath} text={full} />
            ) : null}
          </TransitionLink>
        </h1>

        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <TransitionLink to="/about" className={navLinkText}>
                About
              </TransitionLink>
            </li>
            <li className={navLinkItem}>
              <TransitionLink to="/projects" className={navLinkText}>
                Projects
              </TransitionLink>
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