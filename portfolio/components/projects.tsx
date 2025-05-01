import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "TechSpot",
      description: "A responsive web application with creative design principles.",
      image: "/images/techspot.png?height=300&width=500",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mara2360.github.io/techspot.github.io/",
      githubUrl: "https://github.com/mara2360/Portfolio-Ramshaw/tree/main/TechSpot",
    },
    {
      id: 2,
      title: "justlife",
      description: "An e-commerce platform with seamless user experience.",
      image: "/images/justlife.png?height=300&width=500",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mara2360.github.io/clothingwebsite.github.io/",
      githubUrl: "https://github.com/mara2360/Portfolio-Ramshaw/tree/main/justlife",
    },
    {
      id: 3,
      title: "Community Eats",
      description: "A recipe-sharing platform with user-submitted content.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Firebase", "Typescript", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of my recent work and personal projects.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
