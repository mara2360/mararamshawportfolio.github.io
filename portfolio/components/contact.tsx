import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Let's Connect!
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or just visiting? Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <Card className="border-t-4 border-t-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <a href="mailto:md.ramshaw@outlook.com">
                <p>md.ramshaw@outlook.com</p>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-600" />
                <p>+1 (586) 224-7532</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <p>Detroit, MI, USA</p>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="mb-4 text-lg font-semibold">Connect with me</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-purple-200 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    asChild
                  >
                    <a href="https://github.com/mara2360/Portfolio-Ramshaw.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-pink-200 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/mara-ramshaw-a68943204" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
