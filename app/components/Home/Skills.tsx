import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "SASS", icon: "/sass.png" },
  { name: "BOOTSTRAP", icon: "/bootstrap.png" },
  { name: "TAILWIND CSS", icon: "/tailwind.png" },
  { name: "GIT", icon: "/git.png" },
  { name: "GITHUB", icon: "/github.png" },
  { name: "JAVASCRIPT", icon: "/javascript.png" },
  { name: "TYPESCRIPT", icon: "/typescript.png" },
  { name: "REACT JS", icon: "/react.png" },
  { name: "NEXT JS", icon: "/nextjs.png" },
];

export default function Skills() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] font-semibold text-white">
          My Skills
        </h2>
        <div className="mt-[68] grid grid-cols-2 gap-5 bg-[#1d1d1d] px-5 py-6 sm:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 py-5"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={55}
                height={55}
                className="object-contain"
              />
              <p className="text-center text-[20px] font-medium text-[#27AE60] sm:text-[24px]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
