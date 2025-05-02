"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaSteam } from "react-icons/fa";
import Link from "next/link";

export default function ProfileSectionPage() {
  return (
    <section
      id="profile-section"
      className="min-h-screen w-full pt-24 bg-[#121212] text-white"
      aria-labelledby="profile-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <article>
            <h1
              id="profile-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Hello, I'm Farhan 👋
            </h1>
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              I’m a passionate front-end developer focused on building engaging,
              user-friendly, and accessible websites and web applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              My mission is to blend clean code with beautiful design while
              keeping SEO, performance, and accessibility in mind.
            </p>

            {/* Social Media Icons Section */}
            <div className="mt-6 flex space-x-6 justify-start">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href="https://steamcommunity.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-100 transition duration-300 transform hover:scale-110"
                aria-label="Steam"
              >
                <FaSteam size={30} />
              </Link>
            </div>
          </article>

          {/* Image Section */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10">
            <img
              src="/Farhan.jpg"
              alt="Farhan - Frontend Developer"
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
