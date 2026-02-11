export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-[url(/homepage-hero-section.png)] saturate-70 
        h-120 md:h-140 bg-center bg-cover pt-16 flex pl-4 md:pl-6 lg:pl-16 pr-6 md:pr-0 justify-start grayscale-25"
      >
        <div className="lg:w-1/2 flex flex-col items-left justify-center gap-2">
         
          <h1 className="lg:text-6xl md:text-5xl text-3xl uppercase">
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
