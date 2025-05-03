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
          

          {/* Gallery or Card Component for Portfolios */}
          <ImagePortofolioSection />
        </div>
      </div>
    </section>
  );
}
