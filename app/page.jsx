const heroImage = "/homepage-hero-section.png";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url(/homepage-hero-section.png)] h-130 bg-center bg-cover pt-16">
        <div className="w-1/2 flex flex-col items-left justify-start gap-1">
          <h1 className="lg:text-6xl md:text-4xl text-3xl uppercase">
            Curating Timeless Spaces
          </h1>
          <p className="font-sans text-lg md:text-xl lg:text-2xl">
            Minimalist luxury for the modern home
          </p>

          <button className="self-start text-sm bg-stone-800 text-white py-3 px-6 rounded-sm cursor-pointer font-sans uppercase mt-4">
            View Projects
          </button>
        </div>
      </section>
    </>
  );
}
