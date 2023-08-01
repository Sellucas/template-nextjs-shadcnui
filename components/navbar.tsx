import Link from 'next/link'
import { FileImage, Github, Instagram } from 'lucide-react'

import { MainNav } from '@/components/main-nav'
import Container from '@/components/ui/container'
import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '@/components/ui/button'

const Navbar = () => {
  return (
    <div className="mb-8 border-b">
      <Container>
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileImage />
              <span className="inline-block font-bold">LOGO</span>
            </Link>
            <MainNav className="mx-6" />
          </div>
          <div className="flex items-center space-x-1">
            <Link href={''} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={''} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
