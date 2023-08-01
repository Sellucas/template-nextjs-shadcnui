import Link from 'next/link'

import Container from '@/components/ui/container'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <Container>
      <main className="flex min-h-screen flex-col gap-6 px-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Template Next.js,
            <br className="hidden sm:inline" />
            Shadcn-ui e TailwindCSS.
          </h1>
          <ul className="list-disc text-lg text-muted-foreground">
            <li>Next.js 13 App router</li>
            <li>TailwindCSS</li>
            <li>Lucide-react Icons</li>
            <li>Modo dark/light com next-themes</li>
            <li>TailwindCSS class sorting e merging</li>
            <li>Eslint + Prettier + </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link
            href={'/'}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentação
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={'https://github.com/Sellucas'}
            className={buttonVariants({ variant: 'outline' })}
          >
            GitHub
          </Link>
        </div>
      </main>
    </Container>
  )
}
