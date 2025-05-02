import Image from "next/image";

export default function ImagePortofolioSection() {
  return (
    <section className="w-full h-full py-20 px-4" id="portfolio-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">My Portfolio</h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Here are some of the projects I’ve worked on. I take pride in every
          piece of work I create.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Portfolio Image 1 */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg border border-transparent hover:border-gray-300 transition-all">
          <Image
            src="/portofolio.png"
            alt="Portfolio 1"
            fill
            className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Portfolio Image 2 */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg border border-transparent hover:border-gray-300 transition-all">
          <Image
            src="/portofolio2.png"
            alt="Portfolio 2"
            fill
            className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Portfolio Image 3 */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg border border-transparent hover:border-gray-300 transition-all">
          <Image
            src="/portofolio3.png"
            alt="Portfolio 3"
            fill
            className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
