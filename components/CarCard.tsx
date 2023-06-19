'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TCar } from '@/types'
import { calculateCarRent } from '@/utils'
import Button from './Button'
import CarDetails from './CarDetails'

const CarCard = ({ car }: { car: TCar }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { cityMpg, year, make, model, drive, transmission } = car

  const carRent = calculateCarRent(cityMpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="mt-6 flex text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>
      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src="/tesla.png"
          alt={`${make} ${model} photo `}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative mt-2 flex w-full justify-between">
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
            <p className="car-card__icon-text">{cityMpg} MPG</p>
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

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard
