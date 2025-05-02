"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const testimonials = [
  {
    name: "Nevine Acotanza",
    title: "Chief Officer",
    image: "/Farhan.jpg",
    comment:
      "These people really know what they are doing! Great customer support availability and superb kindness.",
    rating: 5.0,
  },
  {
    name: "Mevine Thoda",
    title: "Operating Officer",
    image: "/about.jpg",
    comment:
      "Very happy with the support and quality! Highly recommend this team to anyone.",
    rating: 5.0,
  },
  {
    name: "Rachel Adams",
    title: "Creative Director",
    image: "/about.jpg",
    comment:
      "I couldn't be happier with the outcome! Fantastic work and great communication.",
    rating: 5.0,
  },
  {
    name: "Michael Brown",
    title: "CEO",
    image: "/about.jpg",
    comment:
      "A top-notch experience from start to finish. Their team is very skilled and helpful.",
    rating: 4.9,
  },
  {
    name: "Lisa Clark",
    title: "Operations Manager",
    image: "/about.jpg",
    comment:
      "I appreciate the quality and efficiency. They really know how to deliver excellent service.",
    rating: 4.7,
  },
  {
    name: "David Lee",
    title: "Business Consultant",
    image: "/about.jpg",
    comment:
      "Amazing work! They always deliver results that exceed expectations. Highly recommend!",
    rating: 5.0,
  },
  {
    name: "Emma White",
    title: "HR Manager",
    image: "/about.jpg",
    comment:
      "Professional and dedicated team! They always go the extra mile to deliver excellence.",
    rating: 5.0,
  },
  {
    name: "Sophia Kim",
    title: "Sales Lead",
    image: "/about.jpg",
    comment:
      "Highly responsive and results-oriented. They made our project smooth and successful.",
    rating: 4.9,
  },
  {
    name: "James Smith",
    title: "Senior Developer",
    image: "/about.jpg",
    comment:
      "Great communication and an incredible team to work with. I'm very satisfied with their service.",
    rating: 4.8,
  },
  {
    name: "Olivia Martinez",
    title: "Project Coordinator",
    image: "/about.jpg",
    comment:
      "Fantastic work and a great experience overall! They are definitely the experts in their field.",
    rating: 5.0,
  },
];

export default function TestimonialSectionPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      className="min-h-screen w-full bg-[#121212] text-white pt-40 px-4"
      id="testimonial-section"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            What People Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Hear directly from people who worked with me. Honest feedback and
            experience sharing.
          </p>
        </div>

        {/* Responsive Scrollable or Wrapped Container */}
        <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-6 py-4 scrollbar-hidden">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="text-left bg-[#191717] hover:bg-[#2a2a2a] transition p-6 rounded-xl shadow-md min-w-[250px] max-w-sm flex-shrink-0 w-full sm:w-[300px]"
            >
              <div className="flex items-center space-x-4 mb-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 line-clamp-3">{t.comment}</p>
              <div className="mt-4 text-yellow-400 font-semibold text-sm">
                {"★".repeat(t.rating)}{" "}
                <span className="text-white">{t.rating.toFixed(1)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black/70 p-4"
      >
        {selected !== null && (
          <Dialog.Panel className="bg-[#1a1a1a] text-white p-6 rounded-lg max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={testimonials[selected].image}
                alt={testimonials[selected].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">
                  {testimonials[selected].name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonials[selected].title}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {testimonials[selected].comment}
            </p>
            <div className="text-yellow-400 font-semibold text-sm">
              {"★".repeat(testimonials[selected].rating)}{" "}
              <span className="text-white">
                {testimonials[selected].rating.toFixed(1)}
              </span>
            </div>
          </Dialog.Panel>
        )}
      </Dialog>
    </section>
  );
}
