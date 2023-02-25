import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div >
        <ul>
          <li><a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer"><img src="/images/fb.png" alt="" /></a></li>
          <li><a href="https://twitter.com/home" target="_blank" rel="noreferrer"><img src="/images/tw.png" alt="" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="/images/ig.png" alt="" /></a></li>
        </ul>
      </div>
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div>
        <h5>Desenvolvido por <a href="https://github.com/Mariano-SI">Mariano Carlos</a></h5>
      </div>
    </footer>
  )
}

export default Footer