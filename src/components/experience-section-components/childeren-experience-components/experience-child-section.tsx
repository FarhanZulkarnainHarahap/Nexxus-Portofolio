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
    title: "BSc in Computer Science",
    place: "University Of Studies, UK",
    type: "Education",
    date: "Jan 2018 - Aug 2020",
    description:
      "Graduated with a BSc in Computer Science from University of Studies. Focused on software development and computer science theory.",
  },
  {
    title: "Diploma in Web Development",
    place: "College Of Studies, USA",
    type: "Education",
    date: "Jan 2018 - Aug 2020",
    description:
      "Completed a diploma program in Web Development, with a focus on front-end and back-end technologies.",
  },
  {
    title: "Expert Of Personal Portfolio",
    place: "PxDraft Studio, UK",
    type: "Education",
    date: "Jan 2018 - Aug 2020",
    description:
      "Developed and maintained a personal portfolio to showcase my web development projects.",
  },
  // Job
  {
    title: "Sr. Front-end Engineer",
    place: "PxDraft Studio, UK",
    type: "Job",
    date: "Jan 2018 - Aug 2020",
    description:
      "Led front-end development for multiple high-profile projects, focusing on React and JavaScript.",
  },
  {
    title: "Graphic Designer",
    place: "Twitter LLC, UK",
    type: "Job",
    date: "Jan 2018 - Aug 2020",
    description:
      "Worked as a graphic designer, contributing to the visual design of several Twitter features.",
  },
  {
    title: "UI/UX Designer – TemplateMonster",
    place: "Job At Rainbow, UK",
    type: "Job",
    date: "Jan 2018 - Aug 2020",
    description:
      "Designed user interfaces and experiences for TemplateMonster, ensuring the best user experience.",
  },
];

export default function ExperienceChildSection() {
  const [selectedItem, setSelectedItem] = useState<ResumeItem | null>(null);

  const educationItems = resumeItems.filter(
    (item) => item.type === "Education"
  );
  const jobItems = resumeItems.filter((item) => item.type === "Job");

  const handleItemClick = (item: ResumeItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="text-white py-12 px-6 h-[600px] mt-[-20px]">
      <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services, and online stores.
      </p>
      <div className="w-full grid grid-cols-2 place-items-center h-fit mb-0 mt-[-30px] gap-x-15">
        <h3 className="w-full h-fit text-xl font-semibold text-center border-b border-[#323232] inline-block px-4">
          Education Quality
        </h3>
        <h3 className="text-xl w-full h-fit font-semibold text-center border-b border-[#323232] inline-block px-4">
          Job Experience
        </h3>
      </div>
      <div
        className="overflow-x-scroll grid grid-cols-1 md:grid-cols-2 gap-13 max-w-6xl mx-auto h-[80%] scrollbar-thin scrollbar-thumb-gray-600"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Education Column */}
        <div>
          <div className="flex flex-col gap-6 mt-4">
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
                <p className="text-gray-400 text-sm">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Column */}
        <div>
          <div className="flex flex-col gap-6 mt-4">
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
                <p className="text-gray-400 text-sm">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-[#191717] p-8 rounded-xl shadow-xl w-96 max-w-full relative">
            {/* Close Button (X) Inside the Modal */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition duration-300"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-white">{selectedItem.title}</h2>
            <p className="text-gray-400 mt-2">{selectedItem.place}</p>
            <p className="text-gray-500 mt-4">{selectedItem.date}</p>
            <p className="text-gray-400 mt-4">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
