import React from 'react'
import { AiFillLinkedIn, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 HERMES_LOUD All rights reserved</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/kko3ch/"><AiFillLinkedIn/></a>
        <a href="https://twitter.com/kko3ch"><AiOutlineTwitter/></a>
        <a href="https://github.com/kko3ch"><AiFillGithub/></a>
      </p>
    </div>
  )
}

export default Footer