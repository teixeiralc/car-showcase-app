'use client'

import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <section className="hero">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title">
          Find, book, or rent a car — quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        >
          Explore Cars
        </Button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  )
}

export default Hero
