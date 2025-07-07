"use client";
import React, { useState } from "react";

type ResumeItem = {
  title: string;
  place: string;
  type: "Education" | "Job";
  date: string;
  description: string; // Added a description for pop-up content
};

const resumeItems: ResumeItem[] = [
  // Education
  {
    title: "Bachelor of Science in Computer Science",
    place: "College Of University Muhammadiyah South Sumatera, indonesia",
    type: "Education",
    date: "Nov 2020 - Nov 2024",
    description:
      "Graduated with a BSc in Computer Science from University of Studies. Focused on software development and computer science theory.",
  },
  {
    title: "Diploma in Web Development",
    place: "College Of University Muhammadiyah South Sumatera, indonesia",
    type: "Education",
    date: "Nov 2020 - Nov 2020",
    description:
      "Completed a diploma program in Web Development, with a focus on front-end and back-end technologies.",
  },

  // Job
  {
    title: "Sr. Front-end Engineer",
    place: "PxDraft Studio, UK",
    type: "Job",
    date: "Jan 2022 - Des 2024",
    description:
      "Led front-end development for multiple high-profile projects, focusing on React and JavaScript.",
  },
];

export default function ExperienceChildSection() {
  const [selectedItem, setSelectedItem] = useState<ResumeItem | null>(null);

  const educationItems = resumeItems.filter(
    (item) => item.type === "Education"
  );
  const jobItems = resumeItems.filter((item) => item.type === "Job");

  const handleItemClick = (item: ResumeItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Experience
      </h2>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services, and online stores.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center mb-8">
        <h3 className="text-xl font-semibold border-b border-[#323232] pb-2">
          Education Quality
        </h3>
        <h3 className="text-xl font-semibold border-b border-[#323232] pb-2">
          Job Experience
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education Column */}
        <div className="flex flex-col gap-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#191717] hover:bg-zinc-700 transition-all duration-300 p-6 rounded-xl shadow-md cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <span className="text-gray-600 text-xs font-semibold">
                {item.date}
              </span>
              <h4 className="mt-2 font-semibold text-gray-300">{item.place}</h4>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                Click for more details.
              </p>
            </div>
          ))}
        </div>

        {/* Job Column */}
        <div className="flex flex-col gap-6">
          {jobItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#191717] hover:bg-zinc-700 transition-all duration-300 p-6 rounded-xl shadow-md cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <span className="text-gray-600 text-xs font-semibold">
                {item.date}
              </span>
              <h4 className="mt-2 font-semibold text-gray-300">{item.place}</h4>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                Click for more details.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-[#191717] p-6 sm:p-8 rounded-xl shadow-xl max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold">{selectedItem.title}</h2>
            <p className="text-gray-400 mt-1">{selectedItem.place}</p>
            <p className="text-gray-500 mt-2 text-sm">{selectedItem.date}</p>
            <p className="text-gray-300 mt-4 text-sm">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
