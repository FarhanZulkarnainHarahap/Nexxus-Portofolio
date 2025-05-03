"use client";

import Image from "next/image";

export default function AboutMeSectionPage() {
  return (
    <section
      id="about-section"
      className="min-h-screen w-full pt-24 bg-[#121212] text-white"
      aria-labelledby="about-heading"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10">
            <Image
              src="/about.jpg"
              alt="Photo of developer workspace or personal about photo"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Text Section */}
          <article>
            <h1
              id="about-heading"
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-white"
            >
              About Me
            </h1>
            <p className="text-lg leading-relaxed mb-4 text-gray-300 text-justify">
              I graduated with a Bachelor&rsquo;s degree in Information Systems
              (S.Kom) from Universitas Muhammadiyah Sumatera Utara in 2024.
              Currently, I&rsquo;m deepening my knowledge at Purwadhika,
              focusing on practical, industry-relevant skills in technology.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
