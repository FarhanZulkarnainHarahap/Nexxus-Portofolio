import ExperienceChildSection from "./childeren-experience-components/experience-child-section";

export default function ExperienceSectionPage() {
  return (
    <section
      id="experience-section"
      aria-labelledby="experience-heading"
      className="min-h-screen w-full bg-[#121212] text-white pt-20 pb-10 md:pt-24 md:pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          {/* Experience Timeline or Cards */}
          <ExperienceChildSection />
        </div>
      </div>
    </section>
  );
}
