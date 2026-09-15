const skills = [
  {
    percent: "50%",
    name: "HTML",
  },
  {
    percent: "20%",
    name: "CSS",
  },
  {
    percent: "10%",
    name: "JAVASCRIPT",
  },
  {
    percent: "2%",
    name: "PHP",
  },
];

export default function Skills() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] text-[#FFFFFF] font-semibold">My Skills</h2>
        <div className="mt-17 grid grid-cols-2 gap-5 bg-[#1d1d1d] px-5 py-6 sm:grid-cols-4 sm:gap-0">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <p className="text-[24px] font-bold text-[#4F4F4F] sm:text-[72px]">
                {skill.percent}
              </p>
              <p className="mt-[-2] text-[24px] font-medium text-[#27AE60]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
