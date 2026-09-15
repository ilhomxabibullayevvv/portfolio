import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200] px-5">
      <div className="flex min-h-[350] flex-col items-center justify-center gap-10 py-12 md:min-h-[430] md:flex-row md:justify-between md:gap-8">
        <div className="w-full md:w-1/2">
          <p className="mb-1 text-[18px] text-white sm:text-[20px] md:text-[48px]">
            Hi, I am
          </p>
          <h1 className="text-[36px] font-bold leading-[1.1] text-white sm:text-[42px] md:text-[48px]">
            Ilhom Xabibullayev
          </h1>
          <p className="mt-2 text-[18px] text-[#828282] sm:text-[18px]">
            Frontend Developer
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/Ilhom-Xabibullayev-CV.pdf"
              download
              className="rounded-[2] border border-[#FFFFFF] px-5 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-white"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="rounded-[2] border border-[#FFFFFF] px-5 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="relative h-[220] w-[220] overflow-hidden rounded-full border-[7px] border-[#101010] shadow-[0_0_0_1px_#202020] sm:h-[280] sm:w-[280] md:h-[650] md:w-[650]">
            <Image
              src="/profile.png"
              alt="profile"
              width={650}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
