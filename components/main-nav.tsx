'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname()

  const routes = [
    {
      href: `/getstarted`,
      label: 'Iniciar',
      active: pathName === `/getstarted`,
    },
    {
      href: `/pricing`,
      label: 'Planos',
      active: pathName === `/pricing`,
    },
  ]

  return (
    <nav className={cn('flex items-center space-x-6 lg:space-x-8', className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'flex flex-row items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
