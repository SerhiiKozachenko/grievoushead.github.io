import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const MenuItem = ({ href, title }) => (
    <li style={{
      listStyle: 'none',
      display: 'inline-block',
      margin: '0 1.5em 0 0'
    }}>
      <a href={href}>{title}</a>
    </li>
)

class Menu extends React.Component {
  render() {
    return (
      <ul style={{
        marginLeft: 0,
        marginBottom: rhythm(2.5)
      }}>
          <MenuItem href='/' title='Blog' />
          <MenuItem href='/projects' title='Projects' />
      </ul>
    )
  }
}

export default Menu
