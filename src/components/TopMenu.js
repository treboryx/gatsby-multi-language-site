import React from 'react'
import { Link } from 'gatsby'
import { Link as PrismicLink, RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../images/logo.png'

const TopMenu = ({ topMenu, activeDocMeta }) => {
  const renderedMenuLinks = topMenu.menu_links
    ? topMenu.menu_links.map((menuLink, index) => (
      <li key={`top-nav-${index}`}>
        <Link to={PrismicLink.url(menuLink.link, linkResolver)}>
          {RichText.asText(menuLink.label)}
        </Link>
      </li>
    ))
    : null

  return (
    <header>
      <div className="menu">
        <a href="/">
          <img className="logo" src={logo} alt="Site logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          {renderedMenuLinks}
          <LanguageSwitcher activeDocMeta={activeDocMeta} />
        </ul>
      </div>
    </header>
  )
}

export default TopMenu
