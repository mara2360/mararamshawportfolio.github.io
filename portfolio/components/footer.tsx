import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Mara Ramshaw. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/mara2360/Portfolio-Ramshaw.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-purple-600 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/mara-ramshaw-a68943204" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-pink-600 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
