"use client";
import AboutMeSectionPage from "@/components/about-components/about-section";
import ContactSectionPage from "@/components/contact-section-components/contact-section";
import ExperienceSectionPage from "@/components/experience-section-components/experience-section";
import PortoSectionPage from "@/components/portofolio-section/portofolio-section";
import ProfileSectionPage from "@/components/profile-components/profile-section";
import SkillSectionPage from "@/components/skill-section/skill-section";
import TestimonialSectionPage from "@/components/Testimonial-section-components/testimonial-section";

export default function HomePage() {
  return (
    <main className="min-h-screen place-items-center text-white bg-gradient-to-b from-gray-800 to-gray-500">
      <ProfileSectionPage />
      <AboutMeSectionPage />
      <SkillSectionPage />
      <PortoSectionPage />
      <ExperienceSectionPage />
      <TestimonialSectionPage />
      <ContactSectionPage />
    </main>
  );
}
