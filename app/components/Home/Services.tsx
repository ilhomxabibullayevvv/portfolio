import Image from "next/image";

const services = [
  {
    image: "/software.svg",
    title: "Software",
    subtitle: "Development",
  },
  {
    image: "/development.svg",
    title: "Web",
    subtitle: "Development",
  },
  {
    image: "/design.svg",
    title: "Web",
    subtitle: "Design",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] font-semibold text-[#FFFFFF]">
          What i do
        </h2>
        <div className="mt-[68] grid grid-cols-1 gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title + service.subtitle}
              className="group min-h-[241] min-w-0 bg-[#212121] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-b hover:border-[#27AE60]"
            >
              <div className="mb-3">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={51}
                  height={46}
                  className="h-[46] w-[51] object-contain"
                />
              </div>
              <h3 className="text-[36px] text-[#535353]">{service.title}</h3>
              <p className="text-[36px] text-[#535353]">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
