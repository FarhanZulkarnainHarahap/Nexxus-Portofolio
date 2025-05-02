import ImagePortofolioSection from "./children-portofolio-section-components/image-portofolio-components";

export default function PortoSectionPage() {
  return (
    <section
      id="portofolio-section"
      aria-labelledby="portofolio-heading"
      className="min-h-screen w-full bg-[#121212] text-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12">
          <header className="text-center mb-12">
            <h1
              id="portofolio-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              Portfolio
            </h1>
            <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              I design and develop services for clients of all sizes —
              specializing in modern, stylish websites, web services, and online
              stores.
            </p>
          </header>

          {/* Gallery or Card Component for Portfolios */}
          <ImagePortofolioSection />
        </div>
      </div>
    </section>
  );
}
