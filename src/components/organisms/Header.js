import React from 'react'
import anime from 'animejs'
import Title from '../atoms/Title'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const link = new URL(e.target.href)
    const targetElement = document.querySelector(link.hash)
    const targetPosition = targetElement.getBoundingClientRect()
    const targetY = targetPosition.y
    const scrollPosition = targetY + window.scrollY

    let animeObjPosition = {
      newY: window.scrollY,
    }

    anime({
      targets: animeObjPosition,
      newY: scrollPosition,
      easing: 'easeInOutQuart',
      duration: 2000,
      round: 1,
      update: function () {
        window.scrollTo(0, animeObjPosition.newY)
      },
    })
  }

  return (
    <header className='header container '>
      <div className='header--title'>
        <Title type='h1'>
          Hello, moi c’est <strong>Arthur</strong>, développeur frontend à la
          recherche d'un <strong>CDI</strong> basé à <strong>Nantes</strong> ou
          en <strong>remote</strong>.
        </Title>
      </div>
      <div className='header--menu'>
        <div className='header--img__wrapper'>
          <StaticImage
            className='header--img'
            src='../../images/arthur.png'
            alt='Arthur Sallé'
            width={352}
            height={235}
            quality={100}
            draggable='false'
          />
        </div>
        <div className='header--menu__btn'>
          <Link
            to='/#about'
            className='btn btn--center btn--green rotate-first'
            onClick={handleClick}
          >
            À propos
          </Link>
          <Link
            to='/#projects'
            className='btn btn--center btn--green rotate-second'
            onClick={handleClick}
          >
            Projets
          </Link>
          <Link
            to='/#contact'
            className='btn btn--center btn--green rotate-third'
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
