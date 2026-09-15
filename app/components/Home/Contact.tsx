export default function Contact() {
  return (
    <section id="contact" className="px-5 py-12">
      <div className="mx-auto max-w-[1200]">
        <h2 className="text-center text-[48px] font-semibold text-[#FFFFFF]">
          Get in touch
        </h2>
        <form className="mx-auto mt-[68] max-w-[520]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border-b border-[#4F4F4F] bg-transparent px-1 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
              />
            </div>
          </div>
          <div className="mt-10">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full resize-none border border-[#4F4F4F] bg-transparent px-2 py-2 text-[14px] text-white placeholder:text-[#4F4F4F] outline-none focus:border-[#00c878]"
            />
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="rounded-[2] border border-[#FFFFFF] px-10 py-2.5 text-[14px] font-medium text-[#FFFFFF] transition duration-300 hover:border-[#27AE60] hover:bg-[#27AE60] hover:text-[#FFFFFF]"
            >
              Submit now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
