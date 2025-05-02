import ExperienceChildSection from "./childeren-experience-components/experience-child-section";

export default function ExperienceSectionPage() {
  return (
    <section
      id="experience-section"
      aria-labelledby="experience-heading"
      className="min-h-screen w-full bg-[#121212] text-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12">
          <header className="text-center mb-10">
            <h1
              id="experience-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              Experience
            </h1>
            <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Here’s a summary of my work experience and the projects I’ve been
              involved in over the years.
            </p>
          </header>

          {/* Experience Timeline or Cards */}
          <ExperienceChildSection />
        </div>
      </div>
    </section>
  );
}
