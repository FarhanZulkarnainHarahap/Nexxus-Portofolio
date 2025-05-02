"use client";

import AllSkillSection from "./children-skill-section-components/all-skil-section";

export default function SkillSectionPage() {
  return (
    <section
      id="skill-section"
      aria-labelledby="skills-heading"
      className="min-h-screen w-full bg-[#121212] text-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12">
          <header className="text-center mb-10">
            <h1
              id="skills-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              My Skills
            </h1>
            <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Here are the technical skills Ive developed through experience and
              education—covering front-end, back-end, and DevOps.
            </p>
          </header>

          <div>
            <AllSkillSection />
          </div>
        </div>
      </div>
    </section>
  );
}
