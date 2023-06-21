'use client'

import { useRouter } from 'next/navigation'
import { UpdateSearchParams } from '@/utils'
import Button from './Button'

interface IShowMoreProps {
  pageNumber: number
  isNext: boolean
}

const ShowMore = ({ pageNumber, isNext }: IShowMoreProps) => {
  const router = useRouter()

  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10
    const newPathname = UpdateSearchParams('limit', `${newLimit}`)

    router.push(newPathname)
  }

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <Button
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        >
          Show More
        </Button>
      )}
    </div>
  )
}

export default ShowMore
