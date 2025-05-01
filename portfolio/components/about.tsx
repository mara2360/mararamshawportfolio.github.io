import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Palette } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
             I’m a creative driven by—designing websites and crafting impactful visuals that bring ideas and communities to life.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/collage.png?height=800&width=600"
                alt="About me"
                width={600}
                height={800}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground">
              I’m a designer and developer passionate about crafting digital experiences that inform, 
              inspire, and connect. Currently pursuing my B.S. in Computer and Information Science at 
              the University of Michigan, I’ve led web design teams, built user-focused websites, and 
              created impactful visuals for nonprofits and startups alike.
            </p>
            <p className="text-muted-foreground">
              From transforming Figma mockups into responsive designs to optimizing SEO and experimenting
              with AI tools, I blend creativity 
              with technical skill to bring ideas to life. With experience across platforms like WIX, 
              WordPress, and Weebly, and tools like React, Adobe Creative Suite, and GitHub, I aim to 
              build work that not only looks good—but makes a difference.
            </p>

            <div className="grid gap-4 mt-6 sm:grid-cols-3">
              <Card className="border-t-4 border-t-purple-500">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Code className="h-10 w-10 text-purple-600 mb-2" />
                  <h4 className="text-lg font-semibold">Development</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    HTML/CSS, JavaScript, React, Node.js, SQL/PHP, C++, and C# (.NET), with tools like GitHub, VS Code, and Visual Studio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-pink-500">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Palette className="h-10 w-10 text-pink-600 mb-2" />
                  <h4 className="text-lg font-semibold">Design</h4>
                  <p className="text-sm text-center text-muted-foreground">Figma and Adobe Creative Suite, and platforms such as WIX and WordPress.</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Lightbulb className="h-10 w-10 text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold">Innovation</h4>
                  <p className="text-sm text-center text-muted-foreground">
                    Integrating AI tools like Runway and Midjourney, experimenting with interactive design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
