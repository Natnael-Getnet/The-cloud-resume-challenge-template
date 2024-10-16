import Certification from "@/components/certification";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Project from "@/components/project";
import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="container px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <Header />
      <Profile />
      <Separator />
      <Skills />
      <Separator />
      <Experience />
      <Separator />
      <Certification />
      <Separator />
      <Project />
      <Separator />
      <Education />
      <Separator />
      <Contact />
    </main>
  );
}
