import Image from "next/image";

const projects = [
  {
    image: "/",
    title: "E-commerce Website",
    description: "Online shop website with responsive design.",
    technologies: "Next.js, Tailwind CSS, TypeScript",
    demo: "#",
    github: "#",
  },
  {
    image: "/",
    title: "Portfolio Website",
    description: "Modern responsive portfolio website.",
    technologies: "Next.js, React, Tailwind CSS",
    demo: "#",
    github: "#",
  },
  {
    image: "/",
    title: "Landing Page",
    description: "Modern landing page for a business.",
    technologies: "HTML, CSS, JavaScript",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="px-5 py-12">
        <div className="mx-auto max-w-[1200]">
          <h2 className="text-center text-[48px] font-semibold text-white">
            Projects
          </h2>
          <div className="mt-[68] grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden bg-[#212121] transition duration-300 hover:-translate-y-1 hover:border-b hover:border-[#27AE60]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-[220] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-[24px] font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#828282]">
                    {project.description}
                  </p>
                  <p className="mt-3 text-[13px] text-[#27AE60]">
                    {project.technologies}
                  </p>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="rounded-[2] border border-[#FFFFFF] px-5 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-white"
                    >
                      Vercel
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-[2] border border-[#FFFFFF] px-5 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
