import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Achievements from '@/components/sections/Achievements'
import Certifications from '@/components/sections/Certifications'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Certifications />
      <Education />
      <Contact />
    </main>
  )
}

