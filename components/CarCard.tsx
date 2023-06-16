'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TCar } from '@/types'
import { calculateCarRent } from '@/utils'
import Button from './Button'

const CarCard = ({ car }: { car: TCar }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { city_mpg, year, make, model, drive, transmission } = car

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt={`${make} ${model} photo `}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex justify-between w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-sm font-medium"
            rightIcon={{
              src: '/right-arrow.svg',
              alt: '',
              fill: true,
            }}
            handleClick={() => setIsOpen(true)}
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CarCard
