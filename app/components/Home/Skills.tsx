const skills = [
  "HTML",
  "CSS",
  "SASS",
  "BOOTSTRAP",
  "TAILWIND CSS",
  "GIT",
  "GITHUB",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT JS",
  "NEXT JS",
];

export default function Skills() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] font-semibold text-[#FFFFFF]">
          My Skills
        </h2>
        <div className="mt-[68] grid grid-cols-2 gap-5 bg-[#1d1d1d] px-5 py-6 sm:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="text-center">
              <p className="text-[20px] font-medium text-[#27AE60] sm:text-[24px]">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
