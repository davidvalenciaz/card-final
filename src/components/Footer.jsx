import React from 'react'
import twi_logo from '../images/twitter.png'
import git_logo from '../images/github.png'
import insta_logo from '../images/instagram.png'
import face_logo from '../images/facebook.png'

function Footer() {
  return (
    <>
    <div className='footer'>
    <img src={git_logo} alt="github" />
    <img src={face_logo} alt="facebook" />
    <img src={insta_logo} alt="instagram" />
    <img src={twi_logo} alt="twitter" />

    </div>
    </>
  )
}

export default Footer
