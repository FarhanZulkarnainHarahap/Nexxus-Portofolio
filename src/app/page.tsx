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
    <main>
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
