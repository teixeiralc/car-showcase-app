import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const Nav = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="max-width flex items-center justify-between px-6 py-4 sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]">
          Sign in
        </Button>
      </nav>
    </header>
  )
}

export default Nav
